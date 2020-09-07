/**
 * import core
 */
import React from "react";
/**
 * import CSS
 */
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
/**
 * import components
 */
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

/**
 * functional component
 */
const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
