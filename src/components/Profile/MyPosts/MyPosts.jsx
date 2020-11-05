import React, { Component } from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post massage={p.message} like={p.likesCount} dislike={p.dislike} />
  ));
    let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }
  return (
    <div className={c.content}>
      My posts
      {postsElements}
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
      <button onClick={addPost}>posts</button>
      </div>
    </div>

  );
};
export default MyPosts;
