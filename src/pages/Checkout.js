import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Order Summary</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.quantity * item.price}</p>
        </div>
      ))}
      <div className="checkout-summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button>Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
