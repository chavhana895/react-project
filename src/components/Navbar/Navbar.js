import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, MenuLink,  NavbarContainer } from "./Navbar.style";
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

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
      {/* <Link to="/">
        <NavbarLogo>Add items</NavbarLogo>
      </Link>
      <Link to="/form">
        <button>Employee Form</button>
      </Link>
      <Link to="/cart">
        <NavbarCart>
          <NavbarCartTitle >List 
            <ShoppingCartCheckoutIcon/>  
          </NavbarCartTitle>
          <NavbarCartCntr >{cartCount}</NavbarCartCntr>
        </NavbarCart>
      </Link> */}
      <Menu>
        <Link to='/'>
            <MenuLink href="">Add Items</MenuLink>
        </Link>

        <Link to='/cart'>
           <MenuLink href="">Item List</MenuLink>
        </Link>
        <Link to='/todo'>
           <MenuLink href="">Todo List</MenuLink>
        </Link>
        <Link to='/form'>
           <MenuLink href="">Employee Form</MenuLink>
        </Link>
        <Link to='/formList'>
           <MenuLink href="">Employee List</MenuLink>
        </Link>
      </Menu>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
