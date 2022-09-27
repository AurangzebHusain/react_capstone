import { useContext } from "react";
import shoppingIcon from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <img src={shoppingIcon} className="shopping-icon" alt="" />
      {/* <ShoppingIcon className="shopping-icon"></ShoppingIcon> */}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
