import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    method: "delivery",
    payment: "bank",
  });
  const [status, setStatus] = useState("form"); // form | processing | processed

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = cart
      .map((item) => `${item.name} x${item.qty} — ₦${item.price * item.qty}`)
      .join("\n");

    const templateParams = {
      to_name: "Kellypee's Emporium",
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      method: formData.method,
      payment: formData.payment,
      order: orderDetails,
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    };

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Email service is not configured. Add your EmailJS keys to .env");
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setStatus("processing");
        setTimeout(() => setStatus("processed"), 3000); // simulate confirmation
      },
      (error) => alert("Failed to send order: " + (error?.text || error))
    );
  };

  const handleNewOrder = () => {
    setCart([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      method: "delivery",
      payment: "bank",
    });
    setStatus("form");
  };

  if (status === "processing") {
    return (
      <div className="checkout-status">
        <h2>⏳ Processing Your Order...</h2>
        <p>
          Dear {formData.name}, we are confirming your payment.
          Please wait while we process it.
        </p>
      </div>
    );
  }

  if (status === "processed") {
    return (
      <div className="checkout-success">
        <h2>✅ Order Processed!</h2>
        <p>
          Thank you {formData.name}, your order has been placed successfully.
        </p>

        {formData.payment === "bank" && (
          <div className="bank-details">
            <h3>Bank Transfer Details (RECOMMENDED)</h3>
            <p><b>Bank:</b> First Bank</p>
            <p><b>Account Name:</b> Kellypee’s Emporium</p>
            <p><b>Account Number:</b> 1234567890</p>
          </div>
        )}

        <p>
          Please call us at 📞 <b>080-123-4567</b> if your order is not processed
          in time.
        </p>
        <button onClick={handleNewOrder} className="new-order-btn">
          Place New Order
        </button>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Delivery Address"
        value={formData.address}
        onChange={handleChange}
        required
      ></textarea>

      <div className="delivery-method">
        <h3>Delivery Method</h3>
        <label>
          <input
            type="radio"
            name="method"
            value="delivery"
            checked={formData.method === "delivery"}
            onChange={handleChange}
          />
          Delivery
        </label>
        <label>
          <input
            type="radio"
            name="method"
            value="pickup"
            checked={formData.method === "pickup"}
            onChange={handleChange}
          />
          Pickup
        </label>
      </div>

      <div className="payment-method">
        <h3>Payment Method</h3>
        <label className={formData.payment === "bank" ? "recommended" : ""}>
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={formData.payment === "bank"}
            onChange={handleChange}
          />
          Bank Transfer (RECOMMENDED)
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={formData.payment === "card"}
            onChange={handleChange}
            disabled
          />
          Pay with Card (Currently Unavailable)
        </label>
      </div>

      <div className="cart-summary">
        <h3>Your Order Summary</h3>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x{item.qty} — ₦{(item.price * item.qty).toLocaleString()}
          </p>
        ))}
        <p className="total">
          <b>Total: ₦{cart.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString()}</b>
        </p>
      </div>

      <button type="submit" className="checkout-btn">
        Place Order
      </button>
    </form>
  );
};

export default Checkout;
