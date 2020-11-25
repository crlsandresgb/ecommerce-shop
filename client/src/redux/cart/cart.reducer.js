/**
 * import types of action
 */
import CartActionTypes from "./cart.types";
/**
 * import utils
 */
import { addItemToCart, removeItemFromCart } from "./cart.utils";
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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.SET_CART_FROM_DB:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
