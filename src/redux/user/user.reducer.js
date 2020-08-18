/**
 * import actions
 */
import { userActiontypes } from "./user.types";
/**
 * default state
 */
const INITIAL_STATE = {
  currentUser: null,
};

/**
 * user reducer
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActiontypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
