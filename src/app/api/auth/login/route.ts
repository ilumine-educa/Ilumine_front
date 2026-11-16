
import { NextResponse } from "next/server";
import { findUser } from "@/src/database/users";
import { cookies } from "next/headers";
import { createSession, isSameOrigin, sessionCookie } from "@/src/lib/responsible/session";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return NextResponse.json({ message: "Origem não permitida." }, { status: 403 });
  try {
    const { email, password, remember } = await request.json();

    if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password || email.length > 254 || password.length > 256) {
      return NextResponse.json(
        { message: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    const user = findUser(email.trim());

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: "E-mail ou senha incorretos." },
        { status: 401 }
      );
    }

    const oldToken = (await cookies()).get(sessionCookie)?.value;
    const session = await createSession(user.id, remember === true, oldToken);
    const response = NextResponse.json({
      message: "Login realizado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
    response.cookies.set(sessionCookie, session.token, {
      httpOnly: true, secure: process.env.NODE_ENV === "production",
      sameSite: "lax", path: "/", ...(remember === true ? { maxAge: session.seconds } : {}),
    });
    return response;
  } catch {
    return NextResponse.json(
      { message: "Erro ao realizar login." },
      { status: 500 }
    );
  }
}
