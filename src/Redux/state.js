import dialogseReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
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
this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogseReducer(this._state.dialogsPage, action);
this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);
this._callSubscriber(this._state);


}
};
export default store; 
window.store = store;