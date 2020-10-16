/**
 * import core
 */
import React from "react";
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
import { signOutStart } from "../../redux/user/user.action";
/**
 * import component
 */
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
/**
 * function
 */
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer c>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OprionLink to="/shop">SHOP</OprionLink>
      <OprionLink to="/contact">CONTACT</OprionLink>
      {currentUser ? (
        <OprionLink as="div" onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
