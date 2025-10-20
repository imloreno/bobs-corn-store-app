import { NextRequest, NextResponse } from "next/server";

export const POST = async (_request: NextRequest) => {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.set("session", "", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
  });
  return res;
};
