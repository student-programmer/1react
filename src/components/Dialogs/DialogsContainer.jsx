import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const DialogsContainer = () => {

  return <StoreContext.Consumer>
    { (store) => {
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }
        let onSendMessageClick = () => {
         store.dispatch(sendMessageCreator());
        }
        let state = store.getState().dialogsPage;
    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    }
    
  }
  </StoreContext.Consumer>
  
};
export default DialogsContainer;
