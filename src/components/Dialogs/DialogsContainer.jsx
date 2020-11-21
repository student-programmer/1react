import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const DialogsContainer = (props) => {

let state = props.store.getState().dialogsPage;

  
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
  );
};
export default DialogsContainer;
