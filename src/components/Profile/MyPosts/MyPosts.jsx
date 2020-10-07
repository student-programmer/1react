import React, { Component } from 'react';
import c from "./MyPosts.module.css";
import Post from './Post/Post';
let MyPosts = () => {
  return (
    <div className={c.content}>
      My posts
      <Post massage="Hi this my first phost" like="11" dislike="12"/>
      <Post massage="Ok" like="1" dislike="3"/>
    </div>
  );
};
export default MyPosts;
