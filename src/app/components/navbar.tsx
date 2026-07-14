"use client";

import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl text-slate-900 shadow-sm shadow-slate-200/30">
      <div className="container mx-auto flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-700 text-xl font-bold text-white shadow-lg shadow-indigo-500/10">
            A
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Ahmed Store
            </p>
            <p className="text-sm text-slate-500">Premium electronics</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search products"
            className="min-w-[180px] flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:max-w-xs"
          />

          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cart
            {totalItems > 0 && (
              <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-rose-500 px-2 text-xs font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
