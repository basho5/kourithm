// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", padding: "60px 15px" }}
    >
      <h1
        style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        お探しのページは見つかりませんでした。
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#0077cc",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        トップページへ戻る
      </Link>
    </div>
  );
};

export default NotFoundPage;
