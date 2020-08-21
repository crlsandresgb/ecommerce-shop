/**
 * import core
 */
import React from "react";
/**
 * import redux
 */
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
/**
 * import css
 */
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

/**
 * main function
 */
const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toogleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

/**
 * dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
});
/**
 * state to props
 */
const mapStateToprops = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);
