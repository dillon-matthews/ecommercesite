import { useState } from "react";
import { useCart } from "../hooks/useCart";

export function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-200">
      <div className="relative w-full pb-[70%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-1 bg-white"
          loading="lazy"
        />
      </div>

      <hr className="border-t border-gray-300 my-1" />

      <div className="p-2 flex flex-col flex-1">
        <h3 className="text-base font-semibold mb-0.5">{product.name}</h3>
        <p className="text-gray-600 mb-2 text-xs">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto flex items-center space-x-2">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-12 border border-gray-300 rounded px-1 py-0.5 text-xs"
          />
          <button
            onClick={() => addToCart(product, quantity)}
            className="flex-1 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition text-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
