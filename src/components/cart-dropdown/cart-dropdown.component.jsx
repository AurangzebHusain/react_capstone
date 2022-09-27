import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map((el) => {
          <CartItem item={el} />;
        })}
      </div>
      <div className="add-to-cart-button">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartDropdown;
