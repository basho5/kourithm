// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For tables, strikethrough, etc.
import remarkMath from "remark-math"; // To support math syntax
import rehypeKatex from "rehype-katex"; // To render math with KaTeX
import { getArticleBySlug } from "../articles";
// KaTeX CSS is loaded via CDN in public/index.html

const ArticlePage = () => {
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const articleMeta = getArticleBySlug(slug); // Get metadata first
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Set document title
    if (articleMeta) {
      document.title = `${articleMeta.title} - kourithm`;
    } else {
      document.title = "記事が見つかりません - kourithm";
    }

    if (!articleMeta) {
      setError(true);
      setLoading(false);
      return;
    }

    // Fetch Markdown content from the public folder
    fetch(`/posts/${slug}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Markdown file '/posts/${slug}.md' not found`);
        }
        return response.text();
      })
      .then((text) => {
        // Remove frontmatter part from the fetched text to get only the body
        // A more robust way would be to use gray-matter here if md files were not in public
        const contentWithoutFrontmatter = text
          .substring(text.indexOf("---", text.indexOf("---") + 3) + 3)
          .trim();
        setMarkdownContent(contentWithoutFrontmatter);
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error("Error fetching markdown:", fetchError);
        setError(true);
        setLoading(false);
      });

    // Cleanup document title on unmount
    return () => {
      document.title = "kourithm - 数学の美しいリズム";
    };
  }, [slug, articleMeta]);

  if (loading) {
    return (
      <div className="container">
        <p>記事を読み込んでいます...</p>
      </div>
    );
  }

  if (error || !articleMeta) {
    // Redirect to a 404 page if the article metadata or content is not found
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container article-page">
      <header className="article-header">
        <h1 className="article-title">{articleMeta.title}</h1>
        <p className="article-meta">
          公開日: {new Date(articleMeta.date).toLocaleDateString("ja-JP")} |
          カテゴリ:{" "}
          <Link
            to={`/category/${encodeURIComponent(articleMeta.category)}`}
            className="category-link"
          >
            {articleMeta.category}
          </Link>
        </p>
        {articleMeta.tags && articleMeta.tags.length > 0 && (
          <p className="article-meta tags-list">
            タグ:{" "}
            {articleMeta.tags.map((tag) => (
              // タグページへのリンクは未実装なのでspanで表示
              <span key={tag} className="tag-link">
                {tag}
              </span>
            ))}
          </p>
        )}
      </header>
      <article className="article-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdownContent}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default ArticlePage;
