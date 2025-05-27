// src/components/PostCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ article }) => {
  if (!article) return null;

  return (
    <article className="post-card">
      <header>
        <h2 className="post-card-title">
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="post-card-meta">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("ja-JP")}
          </time>
          {" | "}
          <Link
            to={`/category/${encodeURIComponent(article.category)}`}
            className="category-link"
          >
            {article.category}
          </Link>
        </p>
      </header>
      <div className="post-card-excerpt">
        <p>{article.excerpt}</p>
      </div>
      <Link to={`/article/${article.slug}`} className="post-card-read-more">
        続きを読む &rarr;
      </Link>
    </article>
  );
};

export default PostCard;
