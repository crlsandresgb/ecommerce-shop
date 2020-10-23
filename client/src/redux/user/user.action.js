/**
 * import actions
 */
import userActiontypes from "./user.types";
/* Google actions */
export const googleSignInStart = () => ({
  type: userActiontypes.GOOGLE_SIGN_IN_START,
});

/* Email actions */
export const emailSignInStart = (emailAndPassword) => ({
  type: userActiontypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

/** Sign in actions */
export const signInSuccess = (user) => ({
  type: userActiontypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActiontypes.SIGN_IN_FAILURE,
  payload: error,
});

/** user session */
export const checkUserSession = () => ({
  type: userActiontypes.CHECK_USER_SESSION,
});

/** sign out actions */
export const signOutStart = () => ({
  type: userActiontypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActiontypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userActiontypes.SIGN_OUT_FAILURE,
  payload: error,
});

/** sign up actions */
export const signUpStart = (userCredentials) => ({
  type: userActiontypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccss = ({ user, aditionalData }) => ({
  type: userActiontypes.SIGN_UP_SUCCESS,
  payload: { user, aditionalData },
});

export const signUpFailure = (error) => ({
  type: userActiontypes.SIGN_OUT_FAILURE,
  payload: error,
});
