import React, { Component } from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import c from './MyPosts.module.css';
import MyPostsContainer from './MyPostsContainer';
import Post from './Post/Post';




let MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post massage={p.message} like={p.likesCount} dislike={p.dislike} />
  ));
    let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
   
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
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
