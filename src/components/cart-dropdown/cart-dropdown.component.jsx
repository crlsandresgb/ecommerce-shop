/**
 * import core
 */
import React from "react";
/**
 * import css
 */
import "./cart-dropdown.styles.scss";
/**
 * import component
 */
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
