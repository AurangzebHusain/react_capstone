import React from "react";

const CartItem = () => {
  const { name, quantity, price } = { name: "", quantity: 2, price: 200 };
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>*<span>{price}</span>
    </div>
  );
};

export default CartItem;
