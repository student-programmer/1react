import React, { Component } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
  { id: 1, message: 'Hi this my first phost', likesCount: 11,  dislike: 12 },
  { id: 2, message: 'Ok', likesCount: 1,  dislike: 3},
  { id: 3, message: 'Five million dolars!' },
];
let MyPosts = () => {
  return (
    <div className={c.content}>
      My posts
      <Post massage={postData[0].message} like={postData[0].likesCount} dislike={postData[0].dislike} />
      <Post massage={postData[1].message} like={postData[1].likesCount} dislike={postData[1].dislike} />
    </div>
  );
};
export default MyPosts;
