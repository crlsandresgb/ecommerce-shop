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
/**
 * import components
 */
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      {/**Header section */}
      <Header />
      {/**set router section, we use switch to handle first found */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
