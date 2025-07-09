import React from 'react';
import Header from './Header';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;