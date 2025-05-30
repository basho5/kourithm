// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} kourithm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
