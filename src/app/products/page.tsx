import ProductsGrid from "../components/ProductGrid";



export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div className="container mx-auto py-10 px-12">
      <h1 className="text-4xl font-bold mb-8">
        All Products
      </h1>

      <ProductsGrid products={data.products} />
    </div>
  );
}