import "server-only";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { users } from "@/src/database/users";
import { findChildrenByResponsibleId } from "@/src/database/children";
import { defaultAccessibility, type AccountSettings, type ChildProfile } from "./types";

type Store = {
  trails?: Record<string, Partial<Record<"portugues" | "matematica", number>>>;
  children: ChildProfile[];
  accounts: Record<string, AccountSettings>;
  sessions: { tokenHash: string; userId: number; expiresAt: number }[];
};

// Adaptador local para uma única instância Node. Trocar por banco de dados
// antes de publicar em ambiente serverless ou com múltiplas instâncias.
const directory = process.env.ILUMINE_DATA_DIR || path.join(process.cwd(), ".data");
const file = path.join(directory, "responsible.json");
const state = globalThis as typeof globalThis & { ilumineWrites?: Promise<unknown> };

function initialStore(): Store {
  return {
    children: users.flatMap((user) => findChildrenByResponsibleId(String(user.id))).map((child) => ({
      ...child,
      interests: [],
      preferences: { sound: true, pace: "livre" },
      accessibility: { ...defaultAccessibility },
    })),
    accounts: {},
    sessions: [],
  };
}

async function readStore(): Promise<Store> {
  try {
    return JSON.parse(await readFile(file, "utf8")) as Store;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return initialStore();
    throw error; // Não substituir dados quando houver falha de leitura.
  }
}

export async function getStore() {
  await state.ilumineWrites;
  return readStore();
}

// Serializa gravações e substitui o arquivo inteiro de forma atômica.
export function updateStore<T>(update: (store: Store) => T): Promise<T> {
  const operation = (state.ilumineWrites ?? Promise.resolve()).then(async () => {
    const store = await readStore();
    const result = update(store);
    await mkdir(directory, { recursive: true });
    const temporary = `${file}.${randomUUID()}.tmp`;
    await writeFile(temporary, JSON.stringify(store, null, 2), { mode: 0o600 });
    await rename(temporary, file);
    return result;
  });
  state.ilumineWrites = operation.catch(() => undefined);
  return operation;
}

export async function getFamily(userId: number) {
  const user = users.find((item) => item.id === userId);
  if (!user) throw new Error("Conta não encontrada.");
  const store = await getStore();
  const settings = store.accounts[String(userId)] ?? {
    name: user.name,
    notifications: { platform: false, reminders: false },
    accessibility: { ...defaultAccessibility },
  };
  return {
    account: { id: user.id, name: settings.name, email: user.email },
    settings,
    children: store.children.filter((child) => child.responsibleId === String(userId)),
  };
}
