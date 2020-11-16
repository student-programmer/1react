const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
          { id: 1, message: 'Hi this my first phost', likesCount: 11, dislike: 12 },
          { id: 2, message: 'Ok', likesCount: 1, dislike: 3 },
          { id: 3, message: 'Five million dolars!', likesCount: 2, dislike: 3 },
        ],
        newPostText:""
       
    },
    dialogsPage:{
      dialogs: [
          { id: 1, name: 'Roma' },
          { id: 2, name: 'Nikita' },
          { id: 3, name: 'Vlad' },
          { id: 4, name: 'Ignat' },
        ],
      messages: [
          { id: 1, message: 'Hi' },
          { id: 2, message: 'How much did you earn?' },
          { id: 3, message: 'Five million dolars!' },
        ],
        newMessageBody:""
    },
    sidebar:{},
   
},
getState(){
  return this._state;
},
subscribe (observer){
  this._callSubscriber = observer;
},

_callSubscriber() {
  console.log( "state was change")
},

dispatch(action){ // {type:"ADD POST "}

if(action.type === ADD_POST){
  let newPost = {
    id: 5, 
    message: this._state.profilePage.newPostText,
    likesCount:0,
    dislike: 1
  };
  this._state.profilePage.newPostText = "";
  this._state.profilePage.posts.push(newPost);
  this._callSubscriber(this._state);   
}else if(action.type === UPDATE_NEW_POST_TEXT){
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber(this._state);   
}else if (action.type === UPDATE_NEW_MESSAGE_BODY){
  this._state.dialogsPage.newMessageBody = action.body;
  this._callSubscriber(this._state);
}else if (action.type === SEND_MESSAGE){
  let body = this._state.dialogsPage.newMessageBody 
  this._state.dialogsPage.newMessageBody = "";
  this._state.dialogsPage.messages.push({ id: 6, message: body },)
  this._callSubscriber(this._state);
}
}
};

export const addPsotActionCreator = () => ({type: ADD_POST})
export const updateNewPsotActionCreator = (text) => 
 ({ type: UPDATE_NEW_POST_TEXT,newText: text})

 export const sendMessageCreator = () => ({type: SEND_MESSAGE})
 export const updateNewMessageBodyCreator = (body) => 
  ({ type: UPDATE_NEW_MESSAGE_BODY,body: body})
 

export default store; 
window.store = store;