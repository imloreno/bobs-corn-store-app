import { DateTime } from "luxon";
import { dbBob } from "@server/config/db";
import { RateLimitError } from "@server/utils/errors";

export const getRateLimitService = async (
  productId: string,
  userId: string,
  rateLimitMs: number
) => {
  const rateLimitCalculation = DateTime.now().minus({
    milliseconds: rateLimitMs,
  });

  try {
    const recentPurchase = await dbBob.rateLimitLog.findFirst({
      where: {
        fk_product_id: productId,
        fk_user_id: userId,
        purchased_at: {
          gte: rateLimitCalculation.toJSDate(),
        },
      },
    });

    console.log("productId:", productId);
    console.log("userId:", userId);
    console.log("rateLimitMs:", rateLimitMs);
    console.log("rateLimitCalculation:", rateLimitCalculation.toJSDate());
    console.log("Recent purchase:", recentPurchase);

    if (recentPurchase) {
      throw new RateLimitError(
        `Rate limit exceeded. You can only purchase 1 corn per ${
          rateLimitMs / 1000
        } seconds. Please try again later.`
      );
    }
  } catch (error) {
    // If it's already a RateLimitError, rethrow it
    if (error instanceof RateLimitError) {
      throw error;
    }

    // Otherwise it's a database error
    console.error("Error checking rate limit:", error);
    throw new Error("Failed to check rate limit");
  }
};

export const logPurchaseForRateLimit = async (
  userId: string,
  productId: string
) => {
  try {
    await dbBob.rateLimitLog.create({
      data: {
        fk_user_id: userId,
        fk_product_id: productId,
        purchased_at: DateTime.now().toJSDate(),
      },
    });
  } catch (error) {
    console.error("Error logging purchase for rate limit:", error);
    throw new Error("Failed to log purchase");
  }
};
