import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const signOutMethod = async () => {
    const res = await signOutUser();
    console.log(res);
  };
  return (
    <>
      <div className="navigation-container">
        <Link to="/" className="logo">
          <CrownLogo></CrownLogo>
        </Link>
        <div className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          {currentUser != null ? (
            <Link to="" onClick={signOutMethod} className="nav-item">
              Sign out
            </Link>
          ) : (
            <Link to="/signin" className="nav-item">
              Sign in
            </Link>
          )}
          <Link to="/shop" className="nav-item">
            Shop
          </Link>
          <Link to="/contact-us" className="nav-item">
            Contact Us
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet />
      <div className="footer">
        <div className="logo">
          <CrownLogo></CrownLogo>
        </div>
        <div className="footer-items">
          <div className="footer-item">Item 1</div>
          <div className="footer-item">Item 2</div>
          <div className="footer-item">Item 3</div>
          <div className="footer-item">Item 4</div>
          <div className="footer-item">Item 5</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
