/**
 * import core
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
/**
 * import css
 */
import "./App.css";
/**
 * import Pages
 */

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      {/**set router section, we use switch to handle first found */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
