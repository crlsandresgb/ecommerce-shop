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
 * import components
 */

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      {/**set router section, we use switch to handle first found */}
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
