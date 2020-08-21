/**
 * import core
 */
import { createSelector } from "reselect";

/**
 * input selectors
 */
const selectCart = (state) => state.cart;

/**
 * selectors
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
