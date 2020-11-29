import React, { Component } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import c from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post massage={p.message} like={p.likesCount} dislike={p.dislike} />
  ));
  const newPostElement = React.createRef();
  const addPost = () => {
    props.addPost();
   
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text) ;   
  }
  return (
    <div className={c.content}>
      My posts
      {postsElements}
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
      <button onClick={addPost}>posts</button>
      </div>
    </div>

  );
};

export default MyPosts;
