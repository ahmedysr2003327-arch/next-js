"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

type AddToCartButtonProps = {
 id: number;
  title: string;
  price: number;
  thumbnail: string;
};
export default function AddToCartButton({ id, title, price, thumbnail }: AddToCartButtonProps) {
  const { addToCart } = useContext(CartContext);

const handleAddToCart = () => {
  addToCart({
    id,
    title,
    price,
    thumbnail,
    quantity: 1,
  });
};

  return (
    <button
      onClick={handleAddToCart}
      className="mt-8 bg-[#2b0760] text-white px-8 py-3 rounded-lg hover:bg-[#3c1085] transition"
        >
      Add To Cart
    </button>
  );
}