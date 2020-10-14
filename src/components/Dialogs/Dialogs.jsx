import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';
const Dialogs = (props) => {
  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>
        <div className={d.dialogsItems}>
          <div className={d.dialog + ' ' + d.active}>
            <NavLink to="/dialogs/1">Roma</NavLink>
          </div>
          <div className={d.dialog}>
            <NavLink to="/dialogs/2">Nikita</NavLink>
          </div>
          <div className={d.dialog}>
            <NavLink to="/dialogs/3">Vlad</NavLink>
          </div>
          <div className={d.dialog}>
            <NavLink to="/dialogs/4">Ignat</NavLink>
          </div>
        </div>
        <div className={d.messages}>
          <div className={d.message}>Hi</div>
          <div className={d.message}>How much did you earn?</div>
          <div className={d.message}>Five million dolars!</div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
