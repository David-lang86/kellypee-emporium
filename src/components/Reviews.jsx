import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Amaka", text: "The bread is so soft and fresh! My family loves it." },
    { id: 2, name: "Chinedu", text: "Best cakes in town. The red velvet was out of this world!" },
    { id: 3, name: "Ngozi", text: "Delivery was fast and smooth. Highly recommend Kellypee's Emporium." },
    { id: 4, name: "Tunde", text: "The cupcakes are my weakness. Simply delicious." },
  ];

  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
