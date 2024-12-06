import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { Cart } from "../components/Cart";

export function Shop() {
  const { products } = useProducts();
  const publishedProducts = products.filter((p) => p.published);

  return (
    <div>
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Weekend Essentials</h1>
          <p className="text-md mb-6">
            Curated collection of minimalist fashion for your everyday moments.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-gray-100 transition text-sm">
            Shop Now
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {publishedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8">
          <Cart />
        </div>
      </section>
    </div>
  );
}
