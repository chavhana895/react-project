import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";
import { ActionDeleteItemBtn, CartItemAction, CartItemContainer, CartItemDetailDesc, CartItemDetailPrice, CartItemDetails, CartItemDetailTitle, CartItemImg, CartItemQty } from "./CartItem.style";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <CartItemContainer>
      <CartItemImg
        src={item.image}
        alt={item.title}
      />
      <CartItemDetails>
        <CartItemDetailTitle>{item.title}</CartItemDetailTitle>
        <CartItemDetailDesc>{item.description}</CartItemDetailDesc>
        <CartItemDetailPrice>$ {item.price}</CartItemDetailPrice>
      </CartItemDetails>
      <CartItemAction >
        <CartItemQty>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </CartItemQty>
        <ActionDeleteItemBtn
          onClick={() => removeFromCart(item.id)}
        >
          {/* <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          /> */}
          Delete
        </ActionDeleteItemBtn>
      </CartItemAction>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
