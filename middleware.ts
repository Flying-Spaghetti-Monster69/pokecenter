import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
      },
    }
  );

  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (
    session.user.role !== "user" &&
    request.nextUrl.pathname.startsWith("/entrenador")
  ) {
    return NextResponse.redirect(new URL("/enfermera/citas", request.url));
  }

  if (
    session.user.role !== "admin" &&
    request.nextUrl.pathname.startsWith("/enfermera")
  ) {
    return NextResponse.redirect(
      new URL("/entrenador/registro-citas", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/entrenador/:path*", "/enfermera/:path*"], // Apply middleware to specific routes
};
