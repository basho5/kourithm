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
  {
    slug: "pi-story",
    title: "π (円周率) の終わらない物語",
    date: "2025-05-29", // 新しい日付
    category: "数論", // または「幾何学」
    excerpt:
      "円の神秘を秘めた数、π。その桁はどこまで続くのか？古代から現代までのπ探求の歴史を辿ります。",
    tags: ["円周率", "無理数", "超越数", "数学史"],
  },
  {
    slug: "dp-on-graphs",
    title: "グラフ上のDPの様々な例題 (Educational DP Contestより)",
    date: "2025-05-28", // 今日の日付
    category: "アルゴリズム", // または "動的計画法"
    excerpt:
      "Educational DP Contest の問題を通して、グラフ上の様々な動的計画法 (DP) のパターンを解説します。",
    tags: [
      "DP",
      "グラフ理論",
      "アルゴリズム",
      "競技プログラミング",
      "Educational DP Contest",
    ],
  },
  {
    slug: "mock-exam-solutions",
    title: "入学試験（数学〈理科〉） 模擬試験 解答・解説",
    date: "2025-05-28",
    category: "試験対策",
    excerpt:
      "入学試験（数学〈理科〉）の模擬試験の全6問について、解答と詳しい解説をまとめました。",
    tags: ["入試対策", "数学", "模試", "解答解説"],
  },
  {
    slug: "takagi-integers",
    title: "整数について — 高木貞治『初等整数論講義』",
    date: "2025-05-30",
    category: "整数論",
    excerpt: "All About Integer",
    tags: ["整数論"],
  },
  {
    slug: "persistent-data-structures",
    title: "永続データ構造の基礎",
    date: "2025-05-31",
    category: "アルゴリズム",
    excerpt:
      "破壊的更新を避けて複数のバージョンを保持するデータ構造の考え方を解説します。",
    tags: ["データ構造", "永続化", "競技プログラミング"],
  },
  {
    slug: "miller-rabin",
    title: "Miller–Rabin 素数判定法",
    date: "2025-06-01",
    category: "アルゴリズム",
    excerpt:
      "高速でよく用いられる確率的素数判定法の仕組みと実装を解説します。",
    tags: ["数論", "アルゴリズム", "素数判定"],
  },
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
