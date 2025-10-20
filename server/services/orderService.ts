import { dbBob } from "@server/config/db";
import { ProductOrderDTO } from "@server/types/dto/order";
import { RateLimitError } from "@server/utils/errors";
import {
  getRateLimitService,
  logPurchaseForRateLimit,
} from "./rateLimitService";

export const createOrderService = async (productOrderDTO: ProductOrderDTO) => {
  try {
    // Check product rate limit (will throw an error if the user has exceeded the rate limit)
    await getRateLimitService(
      productOrderDTO.productId,
      productOrderDTO.userId,
      productOrderDTO.productRateLimit
    );

    // Create order
    const request = await dbBob.productOrder.create({
      data: {
        fk_user_id: productOrderDTO.userId,
        fk_product_order_id: productOrderDTO.productId,
        unit_cost: productOrderDTO.unitCost,
        quantity: productOrderDTO.quantity,
        total: productOrderDTO.totalCost,
      },
    });

    // Log purchase for rate limit
    await logPurchaseForRateLimit(
      productOrderDTO.userId,
      productOrderDTO.productId
    );

    return request;
  } catch (error) {
    if (error instanceof RateLimitError) {
      console.error("Error message:", error.message);
      throw error;
    }

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      throw error;
    }

    throw new Error("Failed to create order: Unknown error");
  }
};
