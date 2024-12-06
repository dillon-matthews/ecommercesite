import { useCart } from "../hooks/useCart";
import { useState } from "react";

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePurchase = () => {
    setShowConfirmation(true);
    clearCart();
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-300 shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-300">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-600 text-xs">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-lg">Total:</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePurchase}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm"
              >
                Purchase
              </button>
            </div>
          </>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">
              Thank you for your purchase!
            </h3>
            <p className="mb-6">Your items have been successfully purchased.</p>
            <button
              onClick={closeConfirmation}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
