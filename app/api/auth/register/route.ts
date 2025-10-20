import { createUserService } from "@server/services/user";
import { User } from "@server/types/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  let createUserRequest;
  try {
    createUserRequest = await createUserService(data as User);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "User created successfully",
    user: createUserRequest,
  });
};
