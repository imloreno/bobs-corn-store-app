import { dbBob } from "@server/config/db";
import { ProductOrderDTO } from "@server/types/dto/order";

export const createOrderService = async (productOrderDTO: ProductOrderDTO) => {
  try {
    const request = await dbBob.productOrder.create({
      data: {
        fk_user_id: productOrderDTO.userId,
        fk_product_order_id: productOrderDTO.productId,
        unit_cost: productOrderDTO.unitCost,
        quantity: productOrderDTO.quantity,
        total: productOrderDTO.totalCost,
      },
    });

    console.log("Order created successfully:", request.id);
    return request;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      throw error;
    }

    throw new Error("Failed to create order: Unknown error");
  }
};
