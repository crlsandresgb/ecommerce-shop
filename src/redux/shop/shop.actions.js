/**
 * Import types
 */
import ShopActionTypes from "./shop.types";

/**
 * actions
 */
export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
