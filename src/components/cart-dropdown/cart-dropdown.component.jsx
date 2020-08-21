/**
 * import core
 */
import React from "react";
import { connect } from "react-redux";
/**
 * import css
 */
import "./cart-dropdown.styles.scss";
/**
 * redux
 */
import { selectCartItems } from "../../redux/cart/cart.selectors";
/**
 * import component
 */
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
/**
 * map props
 */
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
