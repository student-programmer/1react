import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './MyPosts/Profileinfo/Profileinfo';
import p from "./Profile.module.css";
let Profile = () => {
  return (
    <div className={p.content}>
      <Profileinfo/>
      <MyPosts />
    </div>
  );
};
export default Profile;
