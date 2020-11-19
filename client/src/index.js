/**
 * import core
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
/**
 * import redux core
 */
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
/**
 * import css
 */
import "./index.css";
/**
 * import components
 */
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
