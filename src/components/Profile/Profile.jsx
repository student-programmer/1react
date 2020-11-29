import React, { Component } from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./MyPosts/Profileinfo/Profileinfo";
import p from "./Profile.module.css";
let Profile = (props) => {
  return (
    <div className={p.content}>
      <Profileinfo />
      <MyPostsContainer/>
    </div>
  );
};
export default Profile;
