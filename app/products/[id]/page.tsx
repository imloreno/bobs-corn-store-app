import React from "react";

type Props = { params: { id: string } };

const ProductDetails = ({ params }: Props) => {
  const { id } = params;

  return <div>Product ID: {id}</div>;
};

export default ProductDetails;
