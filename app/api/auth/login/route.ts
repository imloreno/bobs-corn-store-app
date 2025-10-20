import { loginUserService } from "@server/services/user";
import { LoginDTO } from "@server/types/dto/login";
import { setSessionCookie } from "@server/utils/cookies";
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

  const res = NextResponse.json({ message: "User logged in successfully" });

  try {
    const userId = String((loginUserRequest as any)?.id ?? "");

    if (userId) {
      // Set session cookie using centralized utility
      setSessionCookie(res, userId);
    } else {
      console.error("No user ID found in login response");
    }
  } catch (e) {
    console.error("Failed to set session cookie:", e);
  }

  return res;
};
