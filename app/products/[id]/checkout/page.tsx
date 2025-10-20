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
          className:
            "right-0 w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[30rem] xl:w-[35rem] -bottom-50 sm:-bottom-75 md:-bottom-78 lg:-bottom-100",
        }}
        subtitle={
          <Subtitle className="!text-2xl md:!text-4xl lg:!text-5xl text-secondary mt-10">
            Premium <span className="text-text block">Kernels</span>
          </Subtitle>
        }
      />
      <section className="px-5 max-w-[1440px] mx-auto">
        <div className="my-10">
          <p className="text-2xl font-[1000]">
            Order <br /> Confirmation
          </p>
        </div>
        <DebitCard className="mt-6" />
        <OrderDetails product={product} className="my-6" />
      </section>

      <ConfirmButtonSection product={product} />
    </div>
  );
};

export default CheckoutPage;
