import { PrismaClient } from "@/prisma/generated/prisma-client/";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const dbBob =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = dbBob;
}
