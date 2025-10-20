import { getProductsService } from "@/app/service/products";
import Product from "@components/Product";
import { Subtitle } from "@components/Text";
import React from "react";

const Products = async ({ error }: { error: Error }) => {
  const products = await getProductsService();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <section className="px-5 pt-10">
      <Subtitle className="mb-4">Our products</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.productId} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
