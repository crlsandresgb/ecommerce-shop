/**
 * import core
 */
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabelKey = "pk_test_cKyyalXdiZE8SOT8bx5Ma5Qb00LKlUnGd4";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Accepted");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name=" React eCommerce"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishabelKey}
    />
  );
};

export default StripeCheckoutButton;
