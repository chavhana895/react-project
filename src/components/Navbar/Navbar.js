import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavbarCart, NavbarCartCntr, NavbarCartTitle, NavbarContainer, NavbarLogo } from "./Navbar.style";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarLogo>Add items</NavbarLogo>
      </Link>
      <Link to="/cart">
        <NavbarCart>
          <NavbarCartTitle >Item List</NavbarCartTitle>
          <NavbarCartCntr >{cartCount}</NavbarCartCntr>
        </NavbarCart>
      </Link>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
