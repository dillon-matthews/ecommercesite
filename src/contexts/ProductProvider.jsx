import { useState } from "react";
import { ProductContext } from "./ProductContext";
import { initialProducts } from "../data/products";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const togglePublished = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, published: !product.published }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, togglePublished }}>
      {children}
    </ProductContext.Provider>
  );
}
