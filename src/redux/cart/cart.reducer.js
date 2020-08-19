/**
 * import types of action
 */
import CartActionTypes from "./cart.types";
/**
 * import utils
 */
import { addItemToCart } from "./cart.utils";
/**
 * set initial state
 */
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
/**
 * cart reducer
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
