import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ProductsGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
    </section>
  );
}
