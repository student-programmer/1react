import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m) => <Message message={m.message} />);
  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>{dialogsElements}</div>
        <div className={d.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};
export default Dialogs;
