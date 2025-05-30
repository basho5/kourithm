// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../articles"; // カテゴリ取得関数

const Sidebar = () => {
  const categories = getCategories();

  return (
    <aside className="sidebar-widget">
      <h3 className="sidebar-widget-title">カテゴリ</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <h3 className="sidebar-widget-title">kourithmについて</h3>
      <p>
        「kourithm」は、高校数学を中心に、その奥深さや美しさ、そして私たちの世界とのつながりを発見するためのサイトです。
        「kou (高校)」と「rhythm (リズム) / algorithm
        (アルゴリズム)」を組み合わせ、数学が持つ固有のリズムや論理の美しさを伝えたいという想いを込めています。
      </p>
    </aside>
  );
};

export default Sidebar;
