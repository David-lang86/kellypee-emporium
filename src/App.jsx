import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/checkout.jsx"; 
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  //  Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  //  Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existing = cart.find((p) => p.id === item.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="products"><Products addToCart={addToCart} /></section>
      {!checkout ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          proceedToCheckout={() => setCheckout(true)}
        />
      ) : (
        <Checkout cart={cart} setCart={setCart} /> 
      )}
      <section id="reviews"><Reviews /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
