/**
 * import actions
 */
import { userActiontypes } from "./user.types";
/**
 * set current user
 */
export const setCurrentUser = (user) => ({
  type: userActiontypes.SET_CURRENT_USER,
  payload: user,
});
