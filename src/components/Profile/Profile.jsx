import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './MyPosts/Profileinfo/Profileinfo';
import p from "./Profile.module.css";
let Profile = (props) => {

  return (
    <div className={p.content}>
      <Profileinfo/>
      <MyPosts posts={props.state.posts} />
    </div>
  );
};
export default Profile;
