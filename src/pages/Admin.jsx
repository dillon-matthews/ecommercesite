import { useProducts } from "../hooks/useProducts";

export function Admin() {
  const { products, togglePublished } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Admin Panel</h1>
      <div className="grid grid-cols-1 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-white shadow rounded-lg p-6"
          >
            <div>
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={product.published}
                onChange={() => togglePublished(product.id)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">Published</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
