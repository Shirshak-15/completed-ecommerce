// checkoutPage.js
import React from 'react';

const CheckoutPage = ({ cart }) => {
  return (
    <div className="checkout-container">
      <h2>Checkout Page</h2>
      <div className="cart-items">
        <h3>Products in Your Cart:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPage;
