// src/pages/NotFoundPage.js
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="container"
      style={{ textAlign: "center", padding: "50px 0" }}
    >
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動された可能性があります。</p>
      <Link
        to="/"
        style={{
          color: "#16a085",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        トップページへ戻る
      </Link>
    </div>
  );
};

export default NotFoundPage;
