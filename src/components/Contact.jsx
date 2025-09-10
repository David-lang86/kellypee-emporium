import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true); // For now, just show success (can be extended with EmailJS)
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>📍 Address: 123 Bakery Street, Lagos</p>
        <p>📞 Phone: 080-123-4567</p>
        <p>📧 Email: info@kellypeesemporium.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {sent && <p className="success-msg">✅ Message sent successfully!</p>}
    </section>
  );
};

export default Contact;
