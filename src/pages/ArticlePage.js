// src/pages/ArticlePage.js
import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (テーブルなど)
// import rehypeKatex from 'rehype-katex'; // KaTeX用 (別途CSSも必要)
// import remarkMath from 'remark-math';   // KaTeX用
import { getArticleBySlug } from "../articles";
import "katex/dist/katex.min.css"; // KaTeXのCSS

const ArticlePage = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");
  const [frontmatter, setFrontmatter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const articleMeta = getArticleBySlug(slug);
    if (!articleMeta) {
      setError(true);
      setLoading(false);
      return;
    }
    setFrontmatter(articleMeta);

    // publicフォルダからMarkdownファイルの内容をフェッチ
    fetch(`/posts/${slug}.md`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then((text) => {
        // gray-matter でフロントマター部分を除いた本文を取得
        // ここではarticles.jsでメタデータを管理しているので、本文のみ取得する
        const contentWithoutFrontmatter = text
          .substring(text.indexOf("---", text.indexOf("---") + 3) + 3)
          .trim();
        setMarkdown(contentWithoutFrontmatter);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div className="container">
        <p>読み込み中...</p>
      </div>
    );
  if (error || !frontmatter) return <Navigate to="/404" replace />;

  return (
    <div className="container article-page">
      <header className="article-header">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="article-meta">
          公開日: {new Date(frontmatter.date).toLocaleDateString("ja-JP")} |
          カテゴリ:{" "}
          <Link
            to={`/category/${encodeURIComponent(frontmatter.category)}`}
            className="category-link"
          >
            {frontmatter.category}
          </Link>
        </p>
      </header>
      <article className="article-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm /*, remarkMath*/]} // remarkMath for KaTeX
          //   rehypePlugins={[rehypeKatex]} // KaTeX. rehypeRawもXSSに注意しつつ検討
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default ArticlePage;
