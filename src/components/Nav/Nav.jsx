import React, { Component } from 'react';
import classes from "./Nav.module.css";
let Nav = () => {
  return <nav className={classes.nav}>
    <div>Profile</div>
    <div>Massages</div>
    <div>News</div>
    <div>Music</div>
    <div>Settings</div>
  </nav>;
};
export default Nav;
