import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 30, image: '/images/product3.jpg' },
    { id: 4, name: 'Product 4', price: 40, image: '/images/product4.jpg' },
    { id: 5, name: 'Product 5', price: 50, image: '/images/product5.jpg' },
    { id: 6, name: 'Product 6', price: 60, image: '/images/product6.jpg' },
    

  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<ProductListing products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
