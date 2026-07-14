"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        onClick={decrease}
        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        -
      </button>

      <span className="text-xl font-semibold">{quantity}</span>

      <button
        onClick={increase}
        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}