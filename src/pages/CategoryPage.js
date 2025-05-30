// src/pages/CategoryPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { getArticlesByCategory, getCategories } from "../articles";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const articles = getArticlesByCategory(decodedCategoryName);
  const allCategories = getCategories();

  if (!allCategories.includes(decodedCategoryName)) {
    // オプション: カテゴリが存在しない場合の処理 (NotFoundPageへリダイレクトなど)
    console.warn(`Category "${decodedCategoryName}" not found.`);
  }

  return (
    <div className="container">
      <div className="category-page-content">
        <main className="main-column">
          <h1
            className="section-title"
            style={{
              textAlign: "left",
              display: "block",
              marginBottom: "30px",
            }}
          >
            カテゴリ: {decodedCategoryName}
          </h1>
          {articles.length > 0 ? (
            <div className="post-card-grid">
              {articles.map((article) => (
                <PostCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p>このカテゴリの記事はまだありません。</p>
          )}
        </main>
        <aside className="sidebar-column">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default CategoryPage;
