import React from "react";

// Redux
import { connect } from "react-redux";
import styled from 'styled-components'
import Product from "./Product/Product";

const ProductCnt = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Products = ({ products }) => {
  return (
    <ProductCnt>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductCnt>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
