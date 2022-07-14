import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { DetailsAddBtn, ItemDetailsDesc, SingleItemContainer, SingleItemDetail, SingleItemDetailPrice, SingleItemDetailTitle, SingleItemImg } from "./SingleItem.style";

const SingleItem = ({ current, addToCart }) => {
  return (
    <SingleItemContainer>
      <SingleItemImg
        src={current.image}
        alt={current.title}
      />
      <SingleItemDetail >
        <SingleItemDetailTitle >{current.title}</SingleItemDetailTitle>
        <ItemDetailsDesc>{current.description}</ItemDetailsDesc>
        <SingleItemDetailPrice>$ {current.price}</SingleItemDetailPrice>

        <DetailsAddBtn
          onClick={() => addToCart(current.id)}
        >
          Add To Cart
        </DetailsAddBtn>
      </SingleItemDetail>
    </SingleItemContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
