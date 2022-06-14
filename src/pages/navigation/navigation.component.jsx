import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/" className="logo">
          {/* <img src="" alt="" srcset="" /> */}
          <CrownLogo></CrownLogo>
        </Link>
        <div className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/signin" className="nav-item">
            Sign in
          </Link>
          <Link to="/shop" className="nav-item">
            Shop
          </Link>
          <Link to="/contact-us" className="nav-item">
            Contact Us
          </Link>
        </div>
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
