import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, proceedToCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x{item.qty} — ₦{(item.price * item.qty).toLocaleString()}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₦{total.toLocaleString()}</h3>
          <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </section>
  );
};

export default Cart;
