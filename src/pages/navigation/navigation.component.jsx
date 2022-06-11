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
          <Link to="/shop" className="nav-item">
            Shop
          </Link>
          <Link to="/contact-us" className="nav-item">
            Contact Us
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
