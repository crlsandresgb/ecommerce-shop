/**
 * import core
 */
import React from "react";
/**
 * improt css
 */
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...oitherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...oitherProps}
  >
    {children}
  </button>
);

export default CustomButton;
