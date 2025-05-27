// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getCategories, getTags } from "../articles";

const Sidebar = () => {
  const categories = getCategories();
  const tags = getTags(); // タグも表示する場合

  return (
    <>
      <aside className="sidebar-widget">
        <h3 className="sidebar-widget-title">kourithmについて</h3>
        <p>
          「kourithm」は、高校数学を中心に、その奥深さや美しさ、そして私たちの世界とのつながりを発見するためのサイトです。
          「kou (高校)」と「rhythm (リズム) / algorithm
          (アルゴリズム)」を組み合わせ、数学が持つ固有のリズムや論理の美しさを伝えたいという想いを込めています。
        </p>
      </aside>
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
      </aside>
      {tags.length > 0 && (
        <aside className="sidebar-widget">
          <h3 className="sidebar-widget-title">タグ</h3>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {tags.map((tag) => (
              <li key={tag} style={{ marginRight: "5px", marginBottom: "5px" }}>
                {/* タグページを作る場合はLinkにする */}
                <span
                  className="article-meta-tag tag-link"
                  style={{ fontSize: "0.85em", padding: "3px 6px" }}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
