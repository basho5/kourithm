// src/pages/HomePage.js
import React from "react";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { getAllArticles } from "../articles";

const HomePage = () => {
  const articles = getAllArticles();

  // 注目の記事などを選ぶロジック (ここでは最新3件など)
  const featuredArticles = articles.slice(0, 3); // 例

  return (
    <div className="container">
      <div className="home-page-content">
        <main className="main-column">
          <h2
            className="section-title"
            style={{
              textAlign: "left",
              display: "block",
              marginBottom: "20px",
            }}
          >
            注目の豆知識
          </h2>
          <div className="post-card-grid">
            {featuredArticles.map((article) => (
              <PostCard key={article.slug} article={article} />
            ))}
          </div>

          <h2
            className="section-title"
            style={{
              textAlign: "left",
              display: "block",
              margin: "40px 0 20px 0",
            }}
          >
            すべての豆知識
          </h2>
          <div className="post-card-grid">
            {" "}
            {/* またはリスト形式にする */}
            {articles.map((article) => (
              <PostCard key={article.slug} article={article} />
            ))}
          </div>
        </main>
        <aside className="sidebar-column">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
