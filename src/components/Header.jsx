import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          The Weekend.
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-lg hover:text-indigo-500 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/admin"
            className="text-lg hover:text-indigo-500 transition-colors"
          >
            Admin
          </Link>
          <div className="relative">
            <Link
              to="/"
              className="text-lg hover:text-indigo-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10a1 1 0 112 0 1 1 0 01-2 0z"
                />
              </svg>
            </Link>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
