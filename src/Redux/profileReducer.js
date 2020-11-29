const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: 'Hi this my first phost', likesCount: 11, dislike: 12 },
        { id: 2, message: 'Ok', likesCount: 1, dislike: 3 },
        { id: 3, message: 'Five million dolars!', likesCount: 2, dislike: 3 },
      ],
      newPostText:""
     
  };
 const profileReducer = (state = initialState,action) => { 
     switch(action.type){
         case ADD_POST:{  let newPost = {
            id: 5, 
            message: state.newPostText,
            likesCount:0,
            dislike: 1
         }
         return {
              ...state, 
              posts: [...state.posts, newPost],
              newPostText:""
        };
        };
          case UPDATE_NEW_POST_TEXT:{
           return {
                  ...state,
                  newPostText: action.newText
                }; 
          }
          default:
              return state;   
     }
    };
    

    export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => 
 ({ type: UPDATE_NEW_POST_TEXT,newText: text})

export default profileReducer;