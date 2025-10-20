import { dbBob } from "@/server/config/db";
import { NextRequest } from "next/server";
import { getSessionCookie, decodeSessionValue } from "@server/utils/cookies";

// Get user by session value
export const getUserBySessionValueService = async (sessionValue?: string) => {
  if (!sessionValue) {
    return null;
  }

  const userId = decodeSessionValue(sessionValue);
  if (!userId) {
    return null;
  }

  try {
    const user = await dbBob.user.findUnique({ where: { id: userId } });

    return user;
  } catch (e) {
    return null;
  }
};

// Get user from request session cookie
export const getUserFromRequest = async (request: NextRequest) => {
  const sessionValue = getSessionCookie(request);

  const user = await getUserBySessionValueService(sessionValue);

  return user;
};
