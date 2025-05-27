// src/pages/HomePage.jsx
import React from "react";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { getAllArticles } from "../articles";

const HomePage = () => {
  const articles = getAllArticles();

  return (
    <div className="container">
      <div className="page-main-content">
        <main className="main-column">
          {articles.length > 0 ? (
            articles.map((article) => (
              <PostCard key={article.slug} article={article} />
            ))
          ) : (
            <p>記事がまだありません。</p>
          )}
        </main>
        <aside className="sidebar-column">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
