/**
 * Import Core
 */
import React from "react";
/**
 * import css
 */
import "./homepage.styles.scss";
/**
 * import component
 */
import Directory from "../../components/directory/directory.component";
/**
 * Main component
 */
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);
export default HomePage;
