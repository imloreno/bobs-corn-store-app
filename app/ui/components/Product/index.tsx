import React from "react";
import { Product as ProductType } from "@ui/types/product";
import Link from "next/link";

import styles from "./product.module.css";

const Product = ({
  productId,
  productPrice,
  productImage,
  productName,
}: ProductType) => {
  return (
    <article className={`bg-box rounded-lg p-4 ${styles.container}`}>
      <Link href={`/products/${productId}`}>
        <div className="aspect-[19/20] overflow-hidden">
          <img
            src={productImage}
            alt={productName}
            className={`w-full h-full object-cover ${styles.productImage}`}
          />
        </div>
        <div>
          <p className="text-sm">{productName}</p>
          <p className="font-extrabold text-md">$ {productPrice?.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
};

export default Product;
