import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kellypee's Emporium. All Rights Reserved.</p>
      <p>
        Made with ❤️ by <span className="brand">Kellypee</span>
      </p>
    </footer>
  );
};

export default Footer;
