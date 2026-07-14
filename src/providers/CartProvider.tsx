"use client";

import { useEffect, useState } from "react";
import { CartContext, CartItem } from "../context/CartContext";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, isLoaded]);
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [...prev, product];
    });
  };
  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  };
  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }

        return item;
      }),
    );
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
