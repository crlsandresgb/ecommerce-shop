/** impoirt core */
import { all, call, takeLatest, put } from "redux-saga/effects";
import userActiontypes from "../user/user.types";
import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActiontypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/**export cart sagas */
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}