import { createContext } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {},
});