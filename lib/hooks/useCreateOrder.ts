import { useMutation } from "@tanstack/react-query";
import { apiPost } from "@/lib/api";

interface CreateOrderPayload {
  productId?: string;
  productRateLimit: number;
  unitCost: number;
  quantity: number;
}

interface CreateOrderResponse {
  message: string;
  order: {
    id: string;
    userId: string;
    productId: string;
    unitCost: number;
    quantity: number;
    totalCost: number;
    productRateLimit: number;
  };
}

export const useCreateOrder = () => {
  return useMutation<CreateOrderResponse, Error, CreateOrderPayload>({
    mutationFn: async (orderData: CreateOrderPayload) => {
      return await apiPost<CreateOrderResponse>("/order", orderData);
    },
  });
};
