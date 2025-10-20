import { loginUserService } from "@server/services/user";
import { LoginDTO } from "@server/types/dto/login";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const loginData = await request.json();

  let loginUserRequest;
  try {
    loginUserRequest = await loginUserService(loginData as LoginDTO);
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in user" },
      { status: 500 }
    );
  }

  // Just set a simple HTTP session cookie containing the user id.
  const res = NextResponse.json({ message: "User logged in successfully" });
  try {
    const userId = String((loginUserRequest as any)?.id ?? "");
    if (userId) {
      // cookie options
      const cookieOptions = {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      };

      // store base64 encoded user id (small, reversible). Replace with a signed token if needed.
      const value = Buffer.from(userId).toString("base64");
      res.cookies.set("session", value, cookieOptions);
    }
  } catch (e) {
    // ignore cookie set errors and still return success payload
    console.error("Failed to set session cookie", e);
  }

  return res;
};
