"use client";

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
            My Cart
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Shopping cart
          </h1>
          <p className="mt-3 text-slate-600">
            Review your items, update quantities, and complete checkout in one
            place.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm">
          <p className="text-sm text-slate-500">Cart total</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
          <p className="mt-1 text-slate-500">
            Subtotal: ${subtotal.toFixed(2)}
          </p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center shadow-sm">
          <p className="text-xl font-semibold text-slate-900">
            Your cart is empty
          </p>
          <p className="mt-3 text-slate-600">
            Add exciting products to your cart and they will appear here.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Order summary
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-indigo-700 px-5 py-4 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
