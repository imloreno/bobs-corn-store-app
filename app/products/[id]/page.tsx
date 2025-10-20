import React from "react";
import { getProductByIdService } from "@/app/service/products";
import Header from "@components/Header";
import Menu from "@components/Menu";
import { Subtitle, Text } from "@components/Text";
import { Button } from "@components/ui/button";
import Link from "next/link";

type Props = { params: { id: string } };

interface AdditionalDetail {
  value: string;
  label: string;
}

const ProductDetails = async ({ params }: Props) => {
  const { id } = await params;

  const product = await getProductByIdService(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log(product.productImage);
  return (
    <div className="overflow-x-hidden">
      <Menu />
      <Header
        image={{
          url: product.productImage ?? "",
          alt: product.productName ?? "",
          className: "-bottom-35 right-0 w-[55vw]",
        }}
        subtitle={
          <Subtitle className="!text-2xl text-secondary mt-10">
            Premium <span className="text-text block">Kernels</span>
          </Subtitle>
        }
      />
      <section className="px-5">
        <div className="mt-4">
          <p className="text-sm font-bold tracking-tighter leading-2 text-smooth">
            fees included
          </p>
          <p className="text-2xl font-[1000]">
            ${product.productPrice?.toFixed(2)}
          </p>
        </div>
        <div className="mt-10">
          <Subtitle className="mb-2">Description</Subtitle>
          <p>{product.productDescription}</p>
        </div>
        <div className="mt-10">
          <Subtitle className="mb-4">Additional Details</Subtitle>
          <ul className="text-sm flex flex-col gap-2 list-disc ml-6">
            {product.productAdditionalDetails?.map(
              (detail: AdditionalDetail) => (
                <li key={detail.label}>
                  <Text>
                    <span className="font-bold">{detail.label}:</span>{" "}
                    {detail.value}
                  </Text>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      <Link href={`/products/${id}/checkout`}>
        <Button className="w-60 my-10 mx-10 py-5 bg-background-secondary">
          BUY ${product.productPrice?.toFixed(2)}
        </Button>
      </Link>
    </div>
  );
};

export default ProductDetails;
