import Link from "next/link";
import Hero from "./components/hero";
import ProductsGrid from "./components/ProductGrid";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  return (
    <main className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8">
      <Hero />

      <section className="mt-16 space-y-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-xl sm:flex sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.26em] text-indigo-600">
              Fresh arrivals
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Products built for performance and style
            </h2>
            <p className="mt-4 text-slate-600">
              Explore our top-rated electronics and accessories crafted to
              empower your everyday tech experience.
            </p>
          </div>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:mt-0"
          >
            Browse all products
          </Link>
        </div>

        <ProductsGrid products={data.products} />
      </section>
    </main>
  );
}
