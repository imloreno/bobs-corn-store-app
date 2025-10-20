import { getUserFromRequest } from "@server/services/sessionService";
import { createOrderService } from "@server/services/orderService";
import { ProductOrderDTO } from "@server/types/dto/order";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    // Debug: Log all cookies received
    const allCookies = request.cookies.getAll();
    console.log("All cookies received:", allCookies);

    // Get user from session cookie (server-side validation)
    const user = await getUserFromRequest(request);
    console.log("User from session:", user ? user.id : "No user found");

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized: No valid session found" },
        { status: 401 }
      );
    }

    // Parse order data from request body
    const orderData = await request.json();
    console.log("Order data:", orderData);

    // Validate required fields
    if (!orderData.productId || !orderData.unitCost || !orderData.quantity) {
      return NextResponse.json(
        { message: "Missing required fields: productId, unitCost, quantity" },
        { status: 400 }
      );
    }

    // Calculate total cost
    const totalCost = orderData.unitCost * orderData.quantity;

    // Use the userId from the authenticated session, NOT from request body
    const productOrderDTO: ProductOrderDTO = {
      userId: user.id, // From session cookie - secure
      productId: orderData.productId,
      unitCost: orderData.unitCost,
      quantity: orderData.quantity,
      totalCost: totalCost,
    };

    // Create order in database
    const order = await createOrderService(productOrderDTO);

    return NextResponse.json(
      {
        message: "Order created successfully",
        order: {
          id: order.id,
          userId: order.fk_user_id,
          productId: order.fk_product_order_id,
          unitCost: order.unit_cost,
          quantity: order.quantity,
          totalCost: order.total,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order - Full error:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);

      return NextResponse.json(
        { message: `Error creating order: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Error creating order: Unknown error" },
      { status: 500 }
    );
  }
};
