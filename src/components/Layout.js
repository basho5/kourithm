// src/components/Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
