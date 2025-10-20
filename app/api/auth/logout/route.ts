import { deleteSessionCookie } from "@server/utils/cookies";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (_request: NextRequest) => {
  const res = NextResponse.json({ message: "Logged out" });

  deleteSessionCookie(res);

  return res;
};
