/**
 * import core for store
 */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
/**
 * import root reducer
 */
import rootReducer from "./root-reducer";

/**
 * set middleware
 */
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
/**
 * create store
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
