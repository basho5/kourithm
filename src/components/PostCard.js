// src/components/PostCard.js
import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ article }) => {
  if (!article) return null;

  return (
    <article className="post-card">
      <div className="post-card-content">
        <h3 className="post-card-title">
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="post-card-excerpt">{article.excerpt}</p>
        <Link to={`/article/${article.slug}`} className="post-card-read-more">
          詳しく見る
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
