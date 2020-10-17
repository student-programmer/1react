import React, { Component } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  { id: 1, message: 'Hi this my first phost', likesCount: 11, dislike: 12 },
  { id: 2, message: 'Ok', likesCount: 1, dislike: 3 },
  { id: 3, message: 'Five million dolars!', likesCount: 2, dislike: 3 },
];
let postsElements = posts.map((p) => (
  <Post massage={p.message} like={p.likesCount} dislike={p.dislike} />
));
let MyPosts = () => {
  return (
    <div className={c.content}>
      My posts
      {postsElements}
    </div>
  );
};
export default MyPosts;
