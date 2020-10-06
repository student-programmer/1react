import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import p from "./Profile.module.css";
let Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src="https://1prime.ru/images/82911/73/829117321.jpg"></img>
      </div>
      <MyPosts />
    </div>
  );
};
export default Profile;
