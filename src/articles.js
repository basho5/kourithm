// src/articles.js

// このリストは手動で管理するか、ビルド時に public/posts から自動生成する
// ここでは手動で記述する例
const articlesData = [
  {
    slug: "euler-identity",
    title: "オイラーの等式: 世界で最も美しい数式",
    date: "2025-05-28",
    category: "解析学",
    excerpt:
      "e, i, π, 1, 0。数学の基本的な定数が集約された奇跡の等式を探求します。",
    tags: ["オイラー", "複素数", "超越数"],
  },
  {
    slug: "golden-ratio",
    title: "黄金比と自然界の美",
    date: "2025-05-26",
    category: "幾何学",
    excerpt:
      "フィボナッチ数列から見えてくる黄金比。なぜ多くの美しい形に現れるのでしょうか？",
    tags: ["黄金比", "フィボナッチ数列", "幾何学"],
  },
  {
    slug: "prime-numbers",
    title: "素数の不思議な世界",
    date: "2025-05-24",
    category: "数論",
    excerpt: "無限に続く素数たち。その分布の謎や未解決問題に触れてみましょう。",
    tags: ["素数", "数論", "未解決問題"],
  },
  // 他の記事のメタデータを追加
];

export const getAllArticles = () => {
  return articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getArticleBySlug = (slug) => {
  return articlesData.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return articlesData
    .filter((article) => article.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getCategories = () => {
  const categories = articlesData.map((article) => article.category);
  return [...new Set(categories)].sort(); // 重複を除外しアルファベット順ソート
};

export const getTags = () => {
  const allTags = articlesData.reduce((acc, article) => {
    if (article.tags) {
      acc.push(...article.tags);
    }
    return acc;
  }, []);
  return [...new Set(allTags)].sort();
};
