import React, { Component } from 'react';
import pc from "./Post.module.css";
let Post = (props) => {
  return (

    <div className={pc.item}>
      <img src="https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg" />{props.massage}
  <span>Like-{props.like}</span>
      <span>Dislike-{props.dislike}</span>
    </div>

  );
};
export default Post;
