/**
 * import core
 */
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabelKey = "pk_test_cKyyalXdiZE8SOT8bx5Ma5Qb00LKlUnGd4";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Succesful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="King Shop"
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
