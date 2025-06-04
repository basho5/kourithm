---
title: "Miller–Rabin 素数判定法"
date: "2025-06-01"
slug: "miller-rabin"
category: "アルゴリズム"
excerpt: "高速でよく用いられる確率的素数判定法の仕組みと実装を解説します。"
tags: ["数論", "アルゴリズム", "素数判定"]
---

## はじめに

Miller–Rabin 法は大きな整数が素数かどうかを高速に判定する確率的アルゴリズムです。
正確性を高めるには複数回テストを行いますが、各回の計算量は \(O(\log n)\) となります。

## アルゴリズムの概要

1. 与えられた奇数 \(n > 2\) を \(n-1 = 2^s d\) と分解する。
2. 無作為に基数 \(a\) を取り、\(a^d \bmod n\) を計算する。
3. この値が 1 または \(n-1\) ならその回は "合格" とする。
4. そうでなければ \(2^{r} d\) (\(0 \le r < s\)) 乗を繰り返し、\(n-1\) が得られれば合格。
5. どの段階でも \(n-1\) が得られない場合、\(n\) は合成数と判定する。

十分な回数合格すれば、\(n\) が素数である確率は非常に高くなります。

## 実装例 (C++)

```cpp
long long mod_pow(long long a, long long e, long long m) {
    long long r = 1;
    while (e > 0) {
        if (e & 1) r = (__int128)r * a % m;
        a = (__int128)a * a % m;
        e >>= 1;
    }
    return r;
}

bool miller_rabin(long long n) {
    if (n < 2) return false;
    for (long long p : {2,3,5,7,11,13,17,19,23,29,31,37}) {
        if (n % p == 0) return n == p;
    }
    long long d = n - 1, s = 0;
    while ((d & 1) == 0) { d >>= 1; ++s; }
    auto check = [&](long long a) {
        long long x = mod_pow(a, d, n);
        if (x == 1 || x == n - 1) return true;
        for (long long r = 1; r < s; ++r) {
            x = (__int128)x * x % n;
            if (x == n - 1) return true;
        }
        return false;
    };
    for (long long a : {2,7,61}) { // 32bit int なら十分
        if (a % n == 0) continue;
        if (!check(a)) return false;
    }
    return true;
}
```

## おわりに

Miller–Rabin 法は暗号分野や競技プログラミングで広く利用されています。確率的ではありますが、
適切な基数を選ぶことで実用上ほぼ完全な判定が可能です。
