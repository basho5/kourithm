// src/pages/AboutPage.js
import React from "react";

const AboutPage = () => {
  return (
    <div className="container article-page" style={{ maxWidth: "800px" }}>
      {" "}
      {/* 記事ページ風スタイル */}
      <header className="article-header">
        <h1 className="article-title">このサイトについて</h1>
      </header>
      <article className="article-content">
        <p>「kourithm」へようこそ！</p>
        <p>
          このサイトは、高校数学を中心に、数学の持つ奥深さ、論理の美しさ、そして時にはユーモラスな一面や、私たちの日常や自然界との意外なつながりを発見し、共有するための場所です。
        </p>
        <p>
          サイト名の「kourithm」は、「kou (高校)」と、数学が内包する「rhythm
          (リズム)」や「algorithm (アルゴリズム)」を組み合わせた造語です。
          難解に思える数式や定理も、その背景にあるストーリーや基本的な考え方のリズムを掴めば、きっと楽しく学べるはず。そんな想いを込めています。
        </p>
        <h2>目指すもの</h2>
        <ul>
          <li>数学の「なぜ？」を大切にし、直感的な理解を助ける解説</li>
          <li>歴史的背景や数学者たちのエピソードを交えた読み物</li>
          <li>美しい数式や図形、不思議な性質を持つ数々の紹介</li>
        </ul>
        <p>
          このサイトが、皆さんの知的好奇心を刺激し、数学の新たな魅力に気づくきっかけとなれば幸いです。
        </p>
      </article>
    </div>
  );
};

export default AboutPage;
