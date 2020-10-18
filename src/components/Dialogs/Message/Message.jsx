import React from 'react';
import d from './../Dialogs.module.css';

const Message = (props) => {
  return <div className={d.massage}>{props.message}</div>;
};


export default Message;
