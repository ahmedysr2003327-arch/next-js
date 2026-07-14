import AddToCartButton from "@/app/components/AddToCartButton";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  discountPercentage: number;
  images: string[];
};

export default async function ProductPage({ params }: Props) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await res.json();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
            Product details
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {product.title}
          </h1>
          <p className="mt-2 text-slate-600">
            High-quality electronics with premium support and fast delivery.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Back to products
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-lg shadow-slate-200/30 transition duration-500 hover:-translate-y-1">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={600}
              height={600}
              className="h-[420px] w-full object-contain"
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {product.images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white p-2 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  width={140}
                  height={140}
                  className="h-32 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
            {product.category}
          </span>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div>
              <p className="text-sm text-slate-500">Price</p>
              <p className="text-4xl font-bold text-slate-900">
                ${product.price}
              </p>
            </div>

            <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              {product.discountPercentage}% OFF
            </div>
          </div>

          <p className="mt-7 leading-7 text-slate-600">{product.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Rating
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-900">
                ⭐ {product.rating}
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Brand
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-900">
                {product.brand}
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-4 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Stock
              </p>
              <p className="mt-3 text-xl font-semibold text-emerald-700">
                {product.stock} left
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AddToCartButton
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />

            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Delivery
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                Free shipping in 2–4 days
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-2xl">🚚</p>
              <h3 className="mt-2 font-semibold text-slate-900">
                Fast Shipping
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Delivered on time every time.
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl">🔄</p>
              <h3 className="mt-2 font-semibold text-slate-900">
                Easy Returns
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Return in 30 days no questions asked.
              </p>
            </div>

            <div className="text-center">
              <p className="text-2xl">🔒</p>
              <h3 className="mt-2 font-semibold text-slate-900">
                Secure Checkout
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Payments protected by our secure gateway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
