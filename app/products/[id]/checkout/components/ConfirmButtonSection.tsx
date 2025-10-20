"use client";
import { Button } from "@ui/components/shadcn/button";
import { Product } from "@ui/types/product";
import { useCreateOrder } from "@/lib/hooks/useCreateOrder";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ConfirmButtonSectionProps {
  product: Product;
}

const ConfirmButtonSection = ({ product }: ConfirmButtonSectionProps) => {
  const router = useRouter();

  const {
    mutate: createOrder,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCreateOrder();

  const buttonMessage = () => {
    if (isPending) return "PLACING ORDER...";
    if (isSuccess) return "ORDER PLACED!";
    if (isError) return "TRY AGAIN";
    return "CONFIRM ORDER";
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push(`/`);
      }, 2000);
    }
  }, [isSuccess, router, product.productId]);

  const handleConfirmOrder = async () => {
    await createOrder({
      productId: product.productId,
      unitCost: product.productPrice || 0,
      quantity: 1, // TODO: Make this dynamic
      productRateLimit: product.productRateLimit,
    });
  };

  return (
    <div className="flex flex-col mb-10 mx-6">
      {isSuccess && (
        <p className="text-success font-medium">Order placed successfully!</p>
      )}
      {isError && (
        <p className="text-error font-medium mb-2">
          {error?.message?.includes("Unauthorized")
            ? "Please log in to place an order"
            : `${error?.message || "Please try again"}`}
        </p>
      )}
      <Button
        className={`w-60 py-5 bg-${
          isError ? "error" : "background-secondary"
        } text-text ${
          isPending || isSuccess ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleConfirmOrder}
        disabled={isPending || isSuccess}
      >
        {buttonMessage()}
      </Button>
    </div>
  );
};

export default ConfirmButtonSection;
