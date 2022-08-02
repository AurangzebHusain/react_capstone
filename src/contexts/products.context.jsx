import { useState } from "react";
import { createContext } from "react";
import PRODUCT_DATA from "../assets/data/shop-data.json";
export const ProductContext = createContext({
  Products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT_DATA);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
