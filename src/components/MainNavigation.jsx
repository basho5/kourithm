// src/components/MainNavigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            ホーム
          </NavLink>
        </li>
        {/* カテゴリページへのリンクはSidebarに集約するので、ここでは主要なナビのみ */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            このサイトについて
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
