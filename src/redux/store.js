/**
 * import core for store
 */
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

/**
 * import root reducer
 */
import rootReducer from "./root-reducer";

/**
 * set middleware
 */
const middlewares = [logger];

/**
 * create store
 */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
