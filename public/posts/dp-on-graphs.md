---
title: "グラフ上のDPの様々な例題 (Educational DP Contestより)"
date: "2025-05-28"
slug: "dp-on-graphs"
category: "アルゴリズム"
excerpt: "Educational DP Contest の問題を通して、グラフ上の様々な動的計画法 (DP) のパターンを解説します。"
tags:
  [
    "DP",
    "グラフ理論",
    "アルゴリズム",
    "競技プログラミング",
    "Educational DP Contest",
  ]
---

## G - Longest Path

[G - Longest Path](https://atcoder.jp/contests/dp/tasks/dp_g)

### 問題概要

$N$ 頂点 $M$ 辺の有向非巡回グラフ (DAG) が与えられます。各頂点 $v$ について、その頂点を始点とするパスの最大長を求めてください。

### 解法のポイント

DAG ではトポロジカルソートが可能であることが重要です。以下のように DP を定義し、ソート順の逆順に評価します。

#### 状態

$$
\mathrm{dp}(v) =
\begin{cases}
0, & \text{if }\;\mathrm{outdeg}(v)=0,\\[6pt]
\displaystyle\max_{(v,u)\in E}\bigl(1 + \mathrm{dp}(u)\bigr), & \text{otherwise.}
\end{cases}
$$

#### 最終的な答え

全頂点 $v$ について

$$
\displaystyle\max_{v}\mathrm{dp}(v)
$$

を取ることで得られます。

---

メモ化再帰での実装例:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> adj;
vector<int> dp;
vector<bool> seen;

int dfs(int v) {
    if (seen[v]) return dp[v];
    seen[v] = true;
    int best = 0;
    for (int u : adj[v]) {
        best = max(best, dfs(u) + 1);
    }
    return dp[v] = best;
}

int main() {
    int N, M;
    cin >> N >> M;
    adj.assign(N, {});
    dp.assign(N, 0);
    seen.assign(N, false);

    for (int i = 0; i < M; ++i) {
        int x, y;
        cin >> x >> y;
        --x; --y;
        adj[x].push_back(y);
    }

    int answer = 0;
    for (int v = 0; v < N; ++v) {
        answer = max(answer, dfs(v));
    }
    cout << answer << '\\n';
    return 0;
}
```
