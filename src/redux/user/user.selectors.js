/**
 * import core
 */
import { createSelector } from "reselect";

/**
 * input
 */
const selectUser = (state) => state.user;

/**
 * selectors
 */
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
