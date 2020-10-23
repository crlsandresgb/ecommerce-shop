/**
 * import core
 */
import { createSelector } from "reselect";
/**
 * input
 */
const selectDirectory = (state) => state.directory;
/**
 * selectors
 */
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
