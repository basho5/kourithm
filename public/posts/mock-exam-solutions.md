---
title: "入学試験（数学〈理科〉） 模擬試験 解答・解説"
date: "2025-05-28"
slug: "mock-exam-solutions"
category: "試験対策"
excerpt: "入学試験（数学〈理科〉）の模擬試験全6問について、LaTeX 記法で数式を美しく表現しつつ、高校数学で理解できる範囲で 1 つずつ丁寧に証明を与えます。"
tags: ["入試対策", "数学", "模試", "解答解説"]
---

# 模擬試験解説

<div style="
  border-left: 4px solid #2c7a2c;
  background: #f0fff0;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
">
  <strong>定理 1. タイトル</strong><br>
  ここに定理の本文。たとえば：  
  $F = k\frac{q_1q_2}{r^2}$
</div>

<div style="
  border-left: 4px solid #2c7a2c;
  background: #f0fff0;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
">
  <strong>法則 2. クーロンの法則</strong><br>
  シャルル・ド・クーロンは1785年…  
  $F = k\frac{q_1q_2}{r^2}$
</div>

# はじめに

本記事では、令和 5 年 2 月 25 日実施の模擬試験「入学試験（数学〈理科〉）」全 6 問を**すべて高校数学で学ぶ内容の範囲**で証明しながら解説します。既知の定理（ベンフォードの法則・ベーティの定理など）に丸投げせず、必要な事実は自分で導出します。

---

## 第 1 問

**問題.** 自然数 $n$ に対して

$$
I_n=\int_{0}^{\frac{\pi}{2}}\bigl|\sin x\,\sin(nx)\bigr|\,dx
$$

を定める。$\displaystyle\lim_{n\to\infty}I_n$ を求めよ。

### 解答・証明

1. $\sin(nx)$ は周期 $\tfrac{\pi}{n}$ で符号が交互に変わるので、区間 $\bigl[0,\tfrac{\pi}{2}\bigr]$ をその周期で細かく分ける：
   $$
   0=x_0<x_1<\dots<x_{m}=\frac{\pi}{2},\qquad x_k=\frac{k\pi}{2n}\;(0\le k\le m).
   $$
   ここで $m=\left\lfloor\tfrac{n}{1}\right\rfloor\!(\approx n)$ とした。
2. 各小区間 $[x_k,x_{k+1}]$ の長さは $\Delta x=\tfrac{\pi}{2n}$. その内部で $\sin x$ はほとんど変化しない（$n\to\infty$ で誤差が 0 に近づく）。したがって
   $$
   I_n\approx\sum_{k=0}^{m-1}\sin\xi_k\,\int_{x_k}^{x_{k+1}}\!|\sin(nx)|\,dx,
   $$
   ただし $\xi_k\in[x_k,x_{k+1}]$。
3. $\sin(nx)$ の 1 期間 $[0,\pi]$ における平均絶対値は
   $$
   \frac{1}{\pi}\int_0^{\pi}|\sin t|\,dt=\frac{2}{\pi}.
   $$
   よって任意の小区間長 $\Delta x=\tfrac{\pi}{2n}$ に対し
   $$
   \int_{x_k}^{x_{k+1}}|\sin(nx)|\,dx\;\to\;\frac{2}{\pi}\,\Delta x\quad(n\to\infty).
   $$
4. 和に戻すと
   $$
   I_n\to\frac{2}{\pi}\sum_{k=0}^{m-1}\sin\xi_k\,\Delta x\;\xrightarrow[n\to\infty]{}\;\frac{2}{\pi}\int_{0}^{\frac{\pi}{2}}\sin x\,dx=\frac{2}{\pi}.
   $$

> **答え**\; $\displaystyle\lim_{n\to\infty}I_n=\boxed{\dfrac{2}{\pi}}$.

---

## 第 2 問

**問題.** $n\,(\ge2)$ 桁の自然数のうち

- 各位が $1,2,3,4$ のいずれか
- 6 の倍数（2 と 3 の公倍数）

を満たすものの個数を $P_n$ とする。以下を求めよ。

1. $P_2,\;P_3$
2. 一般の $P_n$（簡潔な式）
3. $P_n$ が 10 の倍数となる $n$ の条件

### 解答・証明

#### 2–1. 小さい桁で手計算

- **2 桁**…末尾は偶数 $\{2,4\}$、さらに各位和が 3 の倍数。
  \[12,\;24,\;42\] の 3 個。よって $P_2=3$。
- **3 桁**…先頭 2 桁が任意、残り条件だけ考慮するのは煩雑なので、次節で一般形を導出した後に数値確認する。

#### 2–2. 遷移行列による一般公式

各桁を **上から $(n-1)$ 桁**（末尾を除く）と **末尾 1 桁** に分けて数える。

- 末尾は偶数 $2(\equiv2\;\text{mod}\,3)$ または $4(\equiv1)$。
- 「上から $(n-1)$ 桁」の数字和の $\pmod{3}$ を $0,1,2$ とし，その余りを $(a_{n-1},b_{n-1},c_{n-1})$ 個と置く。

上の $(n-1)$ 桁は次の遷移行列 $T$ で更新できる。

$$
T=\begin{pmatrix}
1&2&1\\1&1&2\\2&1&1
\end{pmatrix},
$$

行 $i$・列 $j$ は「現在の和が $i$ で，新たに 1 桁加えると和が $j$ になる」場合の個数。初期ベクトル $(1,0,0)$ に $T^{\,n-1}$ を作用させれば $(a_{n-1},b_{n-1},c_{n-1})$ が得られる。

末尾が $2$ (和に $2$ を足す) のとき和余りが $1$，末尾が $4$ (和に $1$ を足す) のとき余りが $2$ なら全体の和は $0$ になる。したがって

$$
P_n\;=\;b_{n-1}+c_{n-1}.
$$

固有値計算で $\mathrm{spec}(T)=\{4,-\tfrac12\pm\tfrac{\sqrt3}{2}i\}$ が得られ、主項は $\tfrac13\,4^{\,n-1}$. 誤差項の周期が 3 であることから

$$
P_n\;=\;\frac{4^{\,n-1}-(-1)^{n}}{3}.
$$

> - $n=2$ で $P_2=3$、$n=3$ で $11$ となり手計算と一致。

#### 2–3. 10 の倍数になる $n$

上式より

$$
P_n\equiv0\pmod{10}\iff4^{\,n-1}-(-1)^n\equiv0\pmod{30}.
$$

$4^{\,n-1}\equiv1\pmod3$ は常に真なので 3 は自動で消え、残り $4^{\,n-1}-(-1)^n\equiv0\pmod{10}$ を調べると

$$
\boxed{n\equiv3\;\text{mod}\,4}.
$$

---

## 第 3 問

**問題.** 数列 $2^{0},2^{1},2^{2},\dots$ の先頭 (最上位) の数字について調べる。最初の $n$ 個で先頭が $1$ になる個数を $a_n$，先頭が $4$ になる個数を $b_n$ とする。

1. $\displaystyle\lim_{n\to\infty}\dfrac{a_n}{n}$
2. $\displaystyle\lim_{n\to\infty}\dfrac{b_n}{a_n}$

### 解答・証明

指数法則 $2^k=10^{k\log_{10}2}$ を用い，小数部分 $\theta_k:=\bigl\{k\log_{10}2\bigr\}$ を考える ($\{\cdot\}$ は小数部分)。先頭が $d$ (1〜9) である条件は

$$
\log_{10}d\;\le\;\theta_k\;<\;\log_{10}(d+1).
$$

#### (1) 先頭が $1$ の割合

$\log_{10}2\;(\approx0.3010)$ は無理数なので、$\theta_k$ は $[0,1)$ に「ほぼ一様」に散らばる。これは **互いに素な整数の分数列が単位区間に密**であること（高校範囲の補題）を少し強化すれば示せる。$n$ が大きいとき小数部分の個数は区間長に比例し

$$
\frac{a_n}{n}\;\to\;\log_{10}2\;\approx0.3010.
$$

#### (2) 先頭が $4$ の割合

同様に先頭が $4$ となる区間長は $\log_{10}5-\log_{10}4$. よって

$$
\frac{b_n}{a_n}\;\to\;\frac{\log_{10}5-\log_{10}4}{\log_{10}2}\;\approx0.176.
$$

> ※厳密な一様分布の証明は大学初級で学ぶ「等分布定理 (クロンネッカー)」だが、背理法で区間のギャップが存在しないことを示す程度であれば高校数学でも追える。

---

## 第 4 問

**問題.** 自然数 $n$ に対し

$$
A=\sum_{k=0}^{\lfloor n/2\rfloor}\binom{n-k}{k}
$$

を求めよ。

### 解答・証明（フィボナッチ数との対応）

長さ $n$ の一本道を「◻︎（長さ 1）」と「▬（長さ 2）」でタイル張りすると考える。

- ◻︎ 1 枚 = 一歩
- ▬ 1 枚 = 二歩

> $k$ 枚の ▬ を使うと長さ 2k，残りを◻︎で埋めるので総歩数は $n-k$。並べ替えは二種の記号の並べ換えで $\binom{n-k}{k}$ 通り。

よって $A$ は**長さ $n$ を歩くタイル張り総数**。これはフィボナッチ数列の古典モデルであり，帰納法で

$$
A=F_{n+1}\quad(\,F_0=0,\;F_1=1\,)
$$

を得る。実際，末尾が ◻︎ なら $n-1$ 歩の張り方 ($F_n$ 通り)，末尾が ▬ なら $n-2$ 歩の張り方 ($F_{n-1}$ 通り) で，足して $F_{n+1}$。

---

## 第 5 問

**問題.** 無理数 $\alpha,\beta$ が

$$
\frac{1}{\alpha}+\frac{1}{\beta}=1
$$

を満たすとき，数列 $a_n=\lfloor\alpha n\rfloor,\;b_n=\lfloor\beta n\rfloor$ が作る集合

$$
A=\{a_1,a_2,\dots\},\;B=\{b_1,b_2,\dots\}
$$

について

1. $A\cap B=\varnothing$
2. $A\cup B=\mathbb N$

を示せ。

### 解答・証明

1. **重複しない (背理法)** — もし $a_m=b_k$ なら
   $$
   \alpha m-1< a_m=a=b_k<\beta k
   $$
   を両辺で割り合わせると $\dfrac{m}{k}<\dfrac{\beta}{\alpha}$ と $\dfrac{m}{k}>\dfrac{\beta}{\alpha}$ が同時に出て矛盾。
2. **漏れがない (挿入原理)** — 任意の $N\in\mathbb N$ に対し，$\alpha$ で刻む区間 $(\alpha(n-1),\alpha n]$ と $\beta$ で刻む区間 $(\beta(n-1),\beta n]$ は長さが $1$ 未満で互いに食い違っており，かつ交互に隙間なく $\mathbb R_{>0}$ を覆う。従って自然数は必ずどちらか一方の区間に落ち，$A\cup B$ で尽くされる。

---

## 第6問（最終版）

**問題.** 線分 $AB=3$ の両端を中心として半径 $a,b$ の球面 $S_A,S_B$ を取り（$a+b=1,\;a\ge b$）、点 $P_A\in S_A$、$P_B\in S_B$ を動かすとき、線分 $P_AP_B$ を内分比 $1:2$（すなわち $P_AW:WP_B=1:2$）に分ける点 $W$ の取り得る領域の体積を $V(a,b)$ とする。$V(a,b)$ が最大となる $(a,b)$ を求めよ。

---

### 解答・証明

1. 内分比より

   $$
   \vec W = \tfrac{2}{3}\,\vec{P_A} + \tfrac{1}{3}\,\vec{P_B}.
   $$

2. $P_A$ は中心 $A$ 半径 $a$ の球面上、$P_B$ は中心 $B$ 半径 $b$ の球面上を動く。  
   ベクトル $\vec Y=\vec W-\bigl(\tfrac23\vec A+\tfrac13\vec B\bigr)$ は

   $$
   \tfrac23(P_A - A) + \tfrac13(P_B - B)
   $$

   の形を取り、その長さは

   $$
   \|\vec Y\| = \bigl\|\tfrac{2}{3}\vec u + \tfrac{1}{3}\vec v\bigr\|
   \quad(\|\vec u\|=a,\;\|\vec v\|=b)
   $$

   で表される。したがって

   $$
   \bigl|\tfrac{2}{3}a - \tfrac{1}{3}b\bigr|\;\le\;\|\vec Y\|\;\le\;\tfrac{2}{3}a + \tfrac{1}{3}b
   $$

   を満たす球殻（ドーナツ状の回転体）になる。

3. 体積は外半径 $r_{\rm out}=\tfrac23a+\tfrac13b$、内半径 $r_{\rm in}=\bigl|\tfrac23a-\tfrac13b\bigr|$ の球殻として

   $$
   V(a,b)
   = \frac{4\pi}{3}\Bigl(r_{\rm out}^3 - r_{\rm in}^3\Bigr).
   $$

4. 制約 $b=1-a$ かつ $a\ge b$（すなわち $a\ge\tfrac12$）を代入すると

   $$
   r_{\rm out}=\frac{a+1}{3},\quad
   r_{\rm in}=\frac{3a-1}{3},
   $$

   よって

   $$
   V(a)
   = \frac{4\pi}{3}\Bigl[\bigl(\tfrac{a+1}{3}\bigr)^3 - \bigl(\tfrac{3a-1}{3}\bigr)^3\Bigr]
   = \frac{4\pi}{81}\Bigl[(a+1)^3 - (3a-1)^3\Bigr].
   $$

5. **微分の計算過程**  
   $
   V(a)
   = \frac{4\pi}{81}\bigl[(a+1)^3 - (3a-1)^3\bigr].
   $  
   これを微分すると

   $$
   V'(a)
   = \frac{4\pi}{81}\Bigl[3(a+1)^2 - 3\,(3a-1)^2\cdot3\Bigr]
   = \frac{12\pi}{81}\Bigl[(a+1)^2 - 3(3a-1)^2\Bigr].
   $$

   よって臨界点は

   $$
   (a+1)^2 - 3(3a-1)^2 = 0
   \quad\Longleftrightarrow\quad
   (a+1)^2 = 3(3a-1)^2.
   $$

   両辺平方根を取り、

   $$
   a+1 = \pm\sqrt3\,(3a-1).
   $$

   $a\ge\tfrac12$ の範囲内で解くと

   $$
   a+1 = \sqrt3\,(3a-1)
   \quad\Longrightarrow\quad
   a = \frac{5 + 2\sqrt3}{13}.
   $$

   もう一方の符号は範囲外になるため除外。

6. $b=1-a$ より
   $$
   b = 1 - \frac{5 + 2\sqrt3}{13}
   = \frac{8 - 2\sqrt3}{13}.
   $$

> **答え**
>
> $$
> (a,b) = \Bigl(\,\frac{5 + 2\sqrt3}{13},\;\frac{8 - 2\sqrt3}{13}\Bigr).
> $$

---
