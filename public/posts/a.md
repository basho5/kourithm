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
