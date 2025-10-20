import { dbBob } from "@/server/config/db";

export async function getUserBySessionValue(sessionValue?: string) {
  if (!sessionValue) return null;
  try {
    const decoded = Buffer.from(sessionValue, "base64").toString("utf-8");
    const userId = decoded;
    const user = await dbBob.user.findUnique({ where: { id: userId } });
    return user;
  } catch (e) {
    console.error("Failed to resolve user from session", e);
    return null;
  }
}
