/**
 * import core
 */
import React from "react";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/**
 * import css
 */
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OprionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
/**
 * redux
 */
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
/**
 * import component
 */
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
/**
 * function
 */
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer c>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OprionLink to="/shop">SHOP</OprionLink>
      <OprionLink to="/contact">CONTACT</OprionLink>
      {currentUser ? (
        <OprionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OprionLink>
      ) : (
        <OprionLink to="/signin">SIGN IN</OprionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

/**
 * redux functions
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
