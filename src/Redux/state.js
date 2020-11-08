let rerenderEntireTree = () =>{
  console.log( "state was change")
}

  let state = {
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
      sidebar:{}
  }
  window.state = state;
  export const addPost = () =>{
    let newPost = {
      id: 5, 
      message: state.profilePage.newPostText,
      likesCount:0,
      dislike: 1
    };
    state.profilePage.newPostText = "";
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);   
  }
  export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);   
  }
  export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
  }

  export default state; 