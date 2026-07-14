import Image from "next/image";
import heroImage from "../assets/4-removebg-preview.png";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex-1 rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-xl sm:p-10">
        <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">
          Explore new tech
        </p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Shop the latest tech for a smarter home.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          High-performance laptops, smartphones, and accessories designed to
          keep your workspace stylish and your workflow seamless.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-indigo-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Shop Now
          </a>
          <a
            href="/cart"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            View Cart
          </a>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative overflow-hidden rounded-[2rem] bg-indigo-700/10 p-6 shadow-xl shadow-indigo-700/10">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="w-full rounded-[1.75rem] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
