import React from "react";

type Props = { params: { id: string } };

const ProductDetails = async ({ params }: Props) => {
  const { id } = await params;

  return <div>Product ID: {id}</div>;
};

export default ProductDetails;
