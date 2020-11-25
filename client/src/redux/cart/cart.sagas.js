/** impoirt core */
import { all, call, takeLatest, put, select } from "redux-saga/effects";
/**request user data */
import userActiontypes from "../user/user.types";
import { selectCurrentUser } from "../user/user.selectors";
/**request cart data */
import { getCartByUser } from "../../firebase/firebase.util";
import { clearCart, setCartFromDB } from "./cart.actions";
import { selectCartItems } from "./cart.selectors";
import CartActionTypes from "./cart.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartOnDB() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getCartByUser(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromDB({ payload: user }) {
  const cartRef = yield getCartByUser(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromDB(cartSnapshot.data().cartItems));
}

/**user actions */
export function* onSignOutSuccess() {
  yield takeLatest(userActiontypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignInSuccess() {
  yield takeLatest(userActiontypes.SIGN_IN_SUCCESS, checkCartFromDB);
}

/**update cart */
export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartOnDB
  );
}
/**export cart sagas */
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onCartChange),
    call(onSignInSuccess),
  ]);
}
