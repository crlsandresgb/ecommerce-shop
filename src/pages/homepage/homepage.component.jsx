/**
 * Import Core
 */
import React from "react";
/**
 * import css
 */
import { HomePageContainer } from "./homepage.styles";
/**
 * import component
 */
import Directory from "../../components/directory/directory.component";
/**
 * Main component
 */
const HomePage = () => (
  <HomePageContainer className="homepage">
    <Directory />
  </HomePageContainer>
);
export default HomePage;
