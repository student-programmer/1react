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
        ]
    },
    sidebar:{},
   
},
getState(){
  return this._state;
},
_callSubscriber() {
  console.log( "state was change")
},
addPost () {
  let newPost = {
    id: 5, 
    message: this._state.profilePage.newPostText,
    likesCount:0,
    dislike: 1
  };
  this._state.profilePage.newPostText = "";
  this._state.profilePage.posts.push(newPost);
  this._callSubscriber(this._state);   
},
updateNewPostText (newText) {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);   
},
subscribe (observer){
  this._callSubscriber = observer;
}
}
  export default store; 
  window.store = store;