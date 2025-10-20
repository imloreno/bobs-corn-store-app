export interface Product {
  productId?: string;
  productName?: string;
  productImage?: string;
  productDescription?: string;
  productAdditionalDetails?: {
    value: string;
    label: string;
  }[];
  productPrice?: number;
  productRateLimit: number;
}
