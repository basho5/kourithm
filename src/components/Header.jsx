// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const Header = () => {
  return (
    <header className="site-header">
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          paddingBottom: "15px",
          paddingTop: "15px",
        }}
      >
        {" "}
        {/* ヘッダーは少し広めでも良い */}
        <h1 className="site-title">
          <Link to="/">kourithm</Link>
        </h1>
        <p className="site-tagline">数学の美しいリズム、再発見。</p>
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
