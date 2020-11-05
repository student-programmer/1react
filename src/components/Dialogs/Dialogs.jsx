import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessages = React.createRef();
  let addMessages = () => {
    let mes = newMessages.current.value;
    alert(mes)
  }
  return (
    <div className="app-wrapper-content">
      <div className={d.dialogs}>      
        <div className={d.dialogsItems}>{dialogsElements}</div>
        <div className={d.messages}>{messagesElements}</div>
      </div>
      <div>
        <textarea ref={newMessages}></textarea>
      </div>
      <div>
        <button onClick={addMessages}>Add messages</button>
      </div>
    </div>
  );
};
export default Dialogs;
