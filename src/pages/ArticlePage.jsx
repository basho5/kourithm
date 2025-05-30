// src/pages/ArticlePage.jsx
import "katex/dist/katex.min.css"; // ← 必須: KaTeX のスタイルを読み込む
import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import { getArticleBySlug } from "../articles";

const ArticlePage = () => {
  const { slug } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const articleMeta = getArticleBySlug(slug);

  useEffect(() => {
    // ドキュメントタイトルを設定
    if (articleMeta) {
      document.title = `${articleMeta.title} - kourithm`;
    } else {
      document.title = "記事が見つかりません - kourithm";
      setError(true);
      setLoading(false);
      return;
    }

    // Markdown を取得
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok)
          throw new Error(
            `'/posts/${slug}.md' が見つかりません (status: ${res.status})`,
          );
        return res.text();
      })
      .then((text) => {
        // フロントマター (--- ... ---) を除去
        const fmEnd = text.indexOf("---", text.indexOf("---") + 3);
        const content =
          fmEnd !== -1 ? text.slice(fmEnd + 3).trim() : text.trim();
        setMarkdownContent(content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Markdownロードエラー:", err);
        setError(true);
        setLoading(false);
      });

    return () => {
      document.title = "kourithm - 数学の美しいリズム";
    };
  }, [slug, articleMeta]);

  if (loading) {
    return (
      <div className="container">
        <p>記事を読み込んでいます…</p>
      </div>
    );
  }

  if (error || !articleMeta) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container article-page">
      <header className="article-header">
        <h1 className="article-title">{articleMeta.title}</h1>
        <p className="article-meta">
          公開日: {new Date(articleMeta.date).toLocaleDateString("ja-JP")} |
          カテゴリ:&nbsp;
          <Link
            to={`/category/${encodeURIComponent(articleMeta.category)}`}
            className="category-link"
          >
            {articleMeta.category}
          </Link>
        </p>
        {articleMeta.tags?.length > 0 && (
          <p className="article-meta tags-list">
            タグ:&nbsp;
            {articleMeta.tags.map((tag) => (
              <span key={tag} className="tag-link">
                {tag}
              </span>
            ))}
          </p>
        )}
      </header>
      <article className="article-content">
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            remarkMath,
            // remarkAdmonitions,
          ]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
        >
          {markdownContent}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default ArticlePage;
