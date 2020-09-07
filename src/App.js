/*** import core */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/*** import redux actions */
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";

/*** import css */
import "./App.css";
/*** import Pages */
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ChecoutPage from "./pages/checkout/checkout.component";
/*** import components */
import Header from "./components/header/header.component";

class App extends React.Component {
  /*** create subscriber*/
  unsubscribeFromAuth = null;
  /*** component did mount*/
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /*** check if user exist*/
      if (userAuth) {
        /*** retrive or create user */
        const userRef = await createUserProfileDocument(userAuth);
        /*** set user on state */
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  /*** component will unmount */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={ChecoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
/**
 * get current user
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
/**
 * dispatch user
 */
const masDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, masDispatchToProps)(App);
