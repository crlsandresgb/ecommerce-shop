/**
 * import types of action
 */
import CartActionTypes from "./cart.types";
/**
 * set initial state
 */
const INITIAL_STATE = {
  hidden: true,
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

    default:
      return state;
  }
};

export default cartReducer;
