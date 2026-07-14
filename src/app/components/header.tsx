import Link from "next/link";
export default function HeaderPage() {
  return (
     <header className="text-stone-400 bg-[#2b0760]   mb-auto w-full">
        <ul className="flex items-center justify-center gap-10 font-serif text-lg p-2">
              <li className="hover:text-stone-700 rounded-full  p-2"><Link href="/">Home</Link></li>
              <li className="hover:text-stone-700  rounded-full  p-2"><Link href="/product">Product</Link></li>
              <li className="hover:text-stone-700  rounded-full  p-2"><Link href="/product/all">All Products</Link></li>
             
              <li className="hover:text-stone-700  rounded-full  p-2"><Link href="/cart">Cart</Link></li>
        </ul>
      </header>
  );
}