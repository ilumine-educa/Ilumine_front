import { getCurrentUser, isSameOrigin } from "@/src/lib/responsible/session";
import { getFamily, updateStore } from "@/src/lib/responsible/store";
import { validateSettings } from "@/src/lib/responsible/validation";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ message: "Entre novamente na sua conta." }, { status: 401 });
  const { account, settings } = await getFamily(user.id);
  return Response.json({ account, settings }, { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ message: "Origem não permitida." }, { status: 403 });
  const user = await getCurrentUser();
  if (!user) return Response.json({ message: "Entre novamente na sua conta." }, { status: 401 });
  let settings;
  try { settings = validateSettings(await request.json()); }
  catch (error) { return Response.json({ message: error instanceof Error ? error.message : "Dados inválidos." }, { status: 400 }); }
  try {
    await updateStore((store) => { store.accounts[String(user.id)] = settings; });
    return Response.json({ settings });
  } catch {
    return Response.json({ message: "Não foi possível salvar. Tente novamente." }, { status: 500 });
  }
}
