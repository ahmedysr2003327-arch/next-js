"use client";

import Image from "next/image";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/context/CartContext";

type CartItemProps = {
  product: CartItemType;
};

export default function CartItem({ product }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition mb-4 hover:shadow-md">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-1">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-lg object-cover"
        />

        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h3>

          <p className="text-sm text-gray-500">
            Price:
            <span className="ml-1 font-medium text-black">
              ${product.price.toFixed(2)}
            </span>
          </p>

          <p className="text-sm text-gray-500">
            Total:
            <span className="ml-1 font-semibold text-green-600">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center rounded-lg border">
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="px-4 py-2 text-lg transition hover:bg-gray-100"
        >
          −
        </button>

        <span className="w-12 text-center font-semibold">
          {product.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(product.id)}
          className="px-4 py-2 text-lg transition hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(product.id)}
        className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}
