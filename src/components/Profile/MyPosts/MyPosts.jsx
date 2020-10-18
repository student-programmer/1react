import React, { Component } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post massage={p.message} like={p.likesCount} dislike={p.dislike} />
  ));
  return (
    <div className={c.content}>
      My posts
      {postsElements}
    </div>
  );
};
export default MyPosts;
