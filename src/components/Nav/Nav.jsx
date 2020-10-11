import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import n from './Nav.module.css';
let Nav = () => {
  return (
    <nav className={n.nav}>
      <div>
        <NavLink to="/profile" activeClassName={n.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={n.active}>
          Massages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={n.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={n.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={n.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
