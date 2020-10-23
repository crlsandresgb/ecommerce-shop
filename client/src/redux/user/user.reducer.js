/**
 * import actions
 */
import userActiontypes from "./user.types";
/**
 * default state
 */
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

/**
 * user reducer
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActiontypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActiontypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActiontypes.SIGN_IN_FAILURE:
    case userActiontypes.SIGN_OUT_FAILURE:
    case userActiontypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
