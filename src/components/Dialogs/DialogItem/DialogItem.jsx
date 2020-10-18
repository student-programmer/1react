import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';

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

export default DialogItem;
