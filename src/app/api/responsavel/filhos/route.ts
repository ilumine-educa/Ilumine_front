import { randomUUID } from "node:crypto";
import { getCurrentUser, isSameOrigin } from "@/src/lib/responsible/session";
import { getFamily, updateStore } from "@/src/lib/responsible/store";
import { validateChild } from "@/src/lib/responsible/validation";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ message: "Entre novamente na sua conta." }, { status: 401 });
  return Response.json({ children: (await getFamily(user.id)).children }, { headers: { "Cache-Control": "no-store" } });
}

async function save(request: Request, editing: boolean) {
  if (!isSameOrigin(request)) return Response.json({ message: "Origem não permitida." }, { status: 403 });
  const user = await getCurrentUser();
  if (!user) return Response.json({ message: "Entre novamente na sua conta." }, { status: 401 });
  let input;
  let child;
  try {
    input = await request.json();
    child = validateChild(input);
    if (editing && typeof input.id !== "string") throw new Error("Perfil inválido.");
  } catch (error) {
    return Response.json({ message: error instanceof Error ? error.message : "Dados inválidos." }, { status: 400 });
  }
  const profile = { ...child, id: editing ? input.id as string : randomUUID(), responsibleId: String(user.id) };
  try {
    const saved = await updateStore((store) => {
      if (editing) {
        const index = store.children.findIndex((item) => item.id === profile.id && item.responsibleId === String(user.id));
        if (index < 0) return false;
        store.children[index] = profile;
      } else {
        store.children.push(profile);
      }
      return true;
    });
    if (!saved) return Response.json({ message: "Perfil não encontrado." }, { status: 404 });
    return Response.json({ child: profile }, { status: editing ? 200 : 201 });
  } catch {
    return Response.json({ message: "Não foi possível salvar. Tente novamente." }, { status: 500 });
  }
}

export async function POST(request: Request) { return save(request, false); }
export async function PUT(request: Request) { return save(request, true); }
