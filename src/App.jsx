import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider";
import { ProductProvider } from "./contexts/ProductProvider";
import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";
import { Admin } from "./pages/Admin";
import { Footer } from "./components/Footer";
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
