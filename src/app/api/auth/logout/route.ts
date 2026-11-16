import { NextResponse } from "next/server";
import { isSameOrigin, revokeSession, sessionCookie } from "@/src/lib/responsible/session";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return NextResponse.json({ message: "Origem não permitida." }, { status: 403 });
  await revokeSession();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(sessionCookie, "", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 });
  return response;
}
