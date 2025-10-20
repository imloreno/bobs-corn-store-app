import { getProductByIdService } from "@/app/service/products";
import DebitCard from "@components/DebitCard";
import Header from "@components/Header";
import Menu from "@components/Menu";
import { Subtitle } from "@components/Text";
import React from "react";
import OrderDetails from "./components/OrderDetails";
import ConfirmButtonSection from "./components/ConfirmButtonSection";

const CheckoutPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product = await getProductByIdService(id);

  if (!product) {
    return <div>Product not found</div>;
  }

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
      <section className="px-5 mb-10">
        <div className="mt-4">
          <p className="text-2xl font-[1000]">
            Order <br /> Confirmation
          </p>
        </div>
        <DebitCard className="mt-6" />
        <OrderDetails product={product} className="mt-6" />
      </section>

      <ConfirmButtonSection product={product} />
    </div>
  );
};

export default CheckoutPage;
