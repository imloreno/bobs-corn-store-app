import React from "react";
import { Customizable } from "@ui/types/text";
import { Product } from "@ui/types/product";
import { Subtitle } from "@components/Text";

interface OrderDetailsProps extends Customizable {
  product: Product;
}

const OrderDetails = ({ product, className, style }: OrderDetailsProps) => {
  const servicePrice = product.productPrice || 0;
  const bookingFee = servicePrice * 0.025; // 2.5% booking fee
  const iva = servicePrice * 0.0625; // 6.25% IVA (tax)
  const basePrice = servicePrice - bookingFee - iva;

  const paymentData = {
    currency: "USD",
    cardType: "Debit Card",
    issued: "Bank of America",
    token: "098k-jn12-3j42-4k34",
    processor: "stripe",
  };

  return (
    <div className={`px-1 max-w-[600px] ${className}`} style={style}>
      <Subtitle className="mb-6">Order details</Subtitle>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Service price</span>
          <span className="text-black font-semibold">
            ${basePrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Booking fee</span>
          <span className="text-black font-semibold">
            ${bookingFee.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">IVA</span>
          <span className="text-black font-semibold">${iva.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Currency</span>
          <span className="text-black font-semibold">
            {paymentData.currency}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Card type</span>
          <span className="text-black font-semibold">
            {paymentData.cardType}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Issued</span>
          <span className="text-black font-semibold">{paymentData.issued}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Token</span>
          <span className="text-black font-semibold font-mono text-sm">
            {paymentData.token}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Processor</span>
          <span className="text-secondary font-semibold">
            {paymentData.processor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
