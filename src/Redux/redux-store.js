import dialogseReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogseReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);



export default store;