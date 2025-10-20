import { dbBob } from "@/server/config/db";
import { Product } from "@ui/types/product";

export const getProductsService = async (): Promise<Product[]> => {
  try {
    const products: Array<any> = await dbBob.product.findMany();
    return products.map((product) => ({
      productId: product.id,
      productName: product.product_name,
      productImage: product.product_image,
      productDescription: product.product_description,
      productAdditionalDetails: product.additional_details,
      productPrice: product.product_price,
      productRateLimit: product.rate_limit_ms,
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export default getProductsService;
