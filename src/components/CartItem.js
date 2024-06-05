import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <p>Total: ${item.quantity * item.price}</p>
    </div>
  );
};

export default CartItem;
