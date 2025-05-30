// src/components/MainNavigation.js
import React from "react";
import { NavLink } from "react-router-dom"; // NavLinkでアクティブなリンクにスタイルを適用可能

const MainNavigation = () => {
  // カテゴリ一覧はSidebarで表示するので、ここでは基本的なナビゲーションのみ
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/" end>
            ホーム
          </NavLink>
        </li>
        {/* <li><NavLink to="/topics">トピックス一覧</NavLink></li> */}
        <li>
          <NavLink to="/about">このサイトについて</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
