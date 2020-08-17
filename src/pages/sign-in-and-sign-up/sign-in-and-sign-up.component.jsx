/**
 * import core
 */
import React from "react";
/**
 * import CSS
 */
import "./sign-in-and-sign-up.styles.scss";
/**
 * import components
 */
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

/**
 * functional component
 */
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
