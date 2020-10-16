/**
 * import core
 */
import React, { useState } from "react";
import { connect } from "react-redux";
/**
 * import actions
 */
import { signUpStart } from "../../redux/user/user.action";
/**
 * import css
 */
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
/**
 * components
 */
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

/**
 * main class
 */
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentiasl] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * handle submit
   */
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    signUpStart({ email, password, displayName });
  };
  /**
   * handle change
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentiasl({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer className="sign-up">
      <SignUpTitle className="title">I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
