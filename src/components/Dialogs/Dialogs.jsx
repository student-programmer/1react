import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';


let dialogs = [
  { id: 1, name: 'Roma' },
  { id: 2, name: 'Nikita' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Ignat' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How much did you earn?' },
  { id: 3, message: 'Five million dolars!' },
];

let dialogsElements = dialogs.map((d) => (
  <DialogItem name={d.name} id={d.id} />
));
let messagesElements = messages.map((m) => <Message message={m.message} />);

const Dialogs = (props) => {
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
