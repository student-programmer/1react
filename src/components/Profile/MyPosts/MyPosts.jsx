import React, { Component } from 'react';
import c from "./MyPosts.module.css";
import Post from './Post/Post';
let MyPosts = () => {
  return (
    <div className={c.content}>
      My posts
      <Post massage="Hi this my first phost"/>
    </div>
  );
};
export default MyPosts;
