import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({
  id,
  title,
  price,
  thumbnail,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative overflow-hidden bg-slate-100 p-6">
          <Image
            src={thumbnail}
            alt={title}
            width={300}
            height={300}
            className="h-60 w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm text-slate-500 line-clamp-2">
              Premium device crafted for speed and style.
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4">
            <p className="text-xl font-bold text-indigo-700">${price}</p>
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              View
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
