import { Children, createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find((el) => {
    return el.id === product.id;
  });
  if (existingCartItem) {
    // return {...}
  }
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const value = { isCartOpen, setIsCartOpen };
  const addItemsToCart = (product) => {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
