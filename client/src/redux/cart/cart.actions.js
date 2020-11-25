/**
 * import types of action
 */
import CartActionTypes from "./cart.types";
/**
 * actions
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateCartOnDB = () => ({
  type: CartActionTypes.UPDATE_CART_ON_DB,
});

export const setCartFromDB = (CartItems) => ({
  type: CartActionTypes.SET_CART_FROM_DB,
  payload: CartItems,
});
