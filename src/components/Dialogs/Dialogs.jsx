import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={d.dialog + ' ' + d.active}>
      <NavLink to="path" className={d.dialogg}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={d.massage}>{props.message}</div>;
};
let dialogsData = [
  { id: 1, name: 'Roma' },
  { id: 2, name: 'Nikita' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Ignat' },
];
let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How much did you earn?' },
  { id: 3, message: 'Five million dolars!' },
];
const Dialogs = (props) => {
  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        </div>
        <div className={d.messages}>
          <Message message={messagesData[0].message}></Message>
          <Message message={messagesData[1].message}></Message>
          <Message message={messagesData[2].message}></Message>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
