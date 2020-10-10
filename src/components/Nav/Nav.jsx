import React, { Component } from 'react';
import n from './Nav.module.css';
let Nav = () => {
  return (
    <nav className={n.nav}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Massages</a>
      </div>
      <div>
        <a href="/news">News</a>
      </div>
      <div>
        <a href="/music">Music</a>
      </div>
      <div>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
