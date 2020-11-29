const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  };

const dialogseReducer = (state = initialState, action) =>{
 
  switch(action.type){
       case UPDATE_NEW_MESSAGE_BODY :{
        return {...state, newMessageBody: action.body};
       }
       case SEND_MESSAGE: {  
        let body = state.newMessageBody;
        return {...state,
          newMessageBody: "",
          messages: [...state.messages, { id: 6, message: body }]
        };      
       }
       default: return state; 
   }  
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
 ({ type: UPDATE_NEW_MESSAGE_BODY,body: body})

export default dialogseReducer;