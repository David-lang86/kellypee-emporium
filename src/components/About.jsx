import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div className="about-box">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            At Kellypee's Emporium, our mission is to bring warmth and happiness
            through freshly baked bread and cakes made with love, quality, and
            passion. We aim to satisfy your taste buds while making every moment
            special.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted bakery in our community, known for
            excellence, innovation, and the ability to create smiles one loaf
            and one cake at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
