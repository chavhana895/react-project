import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";
import { ProductButtons, ProductButtonsBtn, ProductContainer, ProductDetail, ProductDetailDesc, ProductDetailsPrice, ProductDetailTitle, ProductImg } from "./Product.style";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <>
    <div>
    <ProductContainer>
      <ProductImg
        src={product.image}
        alt={product.title}
      />

      <ProductDetail>
        <ProductDetailTitle>{product.title}</ProductDetailTitle>
        <ProductDetailDesc>{product.description}</ProductDetailDesc>
        <ProductDetailsPrice>$ {product.price}</ProductDetailsPrice>
      </ProductDetail>

      <ProductButtons>
        <Link to={`/product/${product.id}`}>
          <ProductButtonsBtn
            onClick={() => loadCurrentItem(product)}
          >
            View Item
          </ProductButtonsBtn>
        </Link>
        <ProductButtonsBtn
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </ProductButtonsBtn>
      </ProductButtons>
    </ProductContainer>
    </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
