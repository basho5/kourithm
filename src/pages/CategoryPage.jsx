// src/pages/CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { getArticlesByCategory, getCategories } from "../articles";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);
  const articles = getArticlesByCategory(decodedCategoryName);
  const allCategories = getCategories(); // カテゴリ存在チェック用

  if (!allCategories.includes(decodedCategoryName)) {
    // ここでNotFoundPageにリダイレクトするなどの処理も可能
    return (
      <div className="container">
        <p>
          指定されたカテゴリ「{decodedCategoryName}」は見つかりませんでした。
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-main-content">
        <main className="main-column">
          <h1
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "2.2rem",
              marginBottom: "30px",
            }}
          >
            カテゴリ: {decodedCategoryName}
          </h1>
          {articles.length > 0 ? (
            articles.map((article) => (
              <PostCard key={article.slug} article={article} />
            ))
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
