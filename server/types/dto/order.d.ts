export interface ProductOrderDTO {
  id?: string;
  userId: string;
  productId: string;
  unitCost: number;
  quantity: number;
  totalCost: number;
}
