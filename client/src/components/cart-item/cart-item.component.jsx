/**
 * import core
 */
import React from "react";
/**
 * import css
 */
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";
/**
 * functional component
 */
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
