/**
 * import core
 */
import { combineReducers } from "redux";

/**
 * reducers
 */
import userReducer from "./user/user.reducer";

/**
 * compine reducers
 */
export default combineReducers({
  user: userReducer,
});
