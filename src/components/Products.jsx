import React, { useState } from "react";
import "./Products.css";

const Products = ({ addToCart }) => {
  const [confirmation, setConfirmation] = useState(null);

  const breads = [
    { id: 1, name: "Family Loaf", price: 1000, image: "/images/bread1.jpg" },
    { id: 2, name: "Small Loaf", price: 500, image: "/images/bread2.jpg" },
    { id: 3, name: "Wheat Bread", price: 1200, image: "/images/bread3.jpg" },
    { id: 4, name: "Coconut Bread", price: 1500, image: "/images/bread4.jpg" },
    { id: 5, name: "Fruit Bread", price: 1800, image: "/images/bread5.jpg" },
    { id: 6, name: "Banana Bread", price: 2000, image: "/images/bread6.jpg" },
    { id: 7, name: "Milk Bread", price: 1300, image: "/images/bread7.jpg" },
    { id: 8, name: "Sweet Bread", price: 900, image: "/images/bread8.jpg" },
    { id: 9, name: "Butter Bread", price: 1100, image: "/images/bread9.jpg" },
    { id: 10, name: "Baguette", price: 1000, image: "/images/bread10.jpg" },
  ];

  const cakes = [
    { id: 11, name: "Birthday Cake", price: 10000, image: "/images/cake1.jpg" },
    { id: 12, name: "Wedding Cake", price: 50000, image: "/images/cake2.jpg" },
    { id: 13, name: "Cupcakes (6pcs)", price: 3000, image: "/images/cake3.jpg" },
    { id: 14, name: "Fruit Cake", price: 8000, image: "/images/cake4.jpg" },
    { id: 15, name: "Red Velvet", price: 12000, image: "/images/cake5.jpg" },
    { id: 16, name: "Chocolate Cake", price: 10000, image: "/images/cake6.jpg" },
    { id: 17, name: "Cheesecake", price: 15000, image: "/images/cake7.jpg" },
    { id: 18, name: "Carrot Cake", price: 7000, image: "/images/cake8.jpg" },
    { id: 19, name: "Vanilla Cake", price: 9000, image: "/images/cake9.jpg" },
    { id: 20, name: "Black Forest", price: 14000, image: "/images/cake10.jpg" },
  ];

  const products = [...breads, ...cakes];

  const handleAddToCart = (item) => {
    addToCart(item);
    setConfirmation(item.id);
    setTimeout(() => setConfirmation(null), 2000);
  };

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₦{item.price.toLocaleString()}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            {confirmation === item.id && (
              <span className="confirmation">✅ Added!</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
