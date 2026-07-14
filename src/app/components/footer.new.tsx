export default function FooterPage() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          &copy; 2026 Ahmed Store. Built for exceptional shopping experiences.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <a href="/products" className="transition hover:text-white">
            Products
          </a>
          <a href="/cart" className="transition hover:text-white">
            Cart
          </a>
          <span className="hidden sm:inline">|</span>
          <span className="text-slate-500">
            Fast shipping • Easy returns • Secure checkout
          </span>
        </div>
      </div>
    </footer>
  );
}
