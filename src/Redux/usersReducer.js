const FOLLOW = "FOLLOW";
const UNFOLLOW= "UNFOLLOW";
const SET_USERS= "SET_USERS";
const  SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING"


let initialState = {
    users: [
        { id: '/1', photoUrl:"https://proof.kz/files/products/596px-LineartPresRev.300x300.png?d2484c1b162c4272ba3db90159945b50",
         followed:true, fullname: "Roma", status: "i am a boss1", location: { city: "Simferopol", country:"Russia"} },
        { id: '/2', photoUrl:"https://proof.kz/files/products/596px-LineartPresRev.300x300.png?d2484c1b162c4272ba3db90159945b50",
         followed:false, fullname: "Ignat", status: "i am a boss2", location: { city: "Sevastopol", country:"Russia"} },
        { id: '/3', photoUrl:"https://proof.kz/files/products/596px-LineartPresRev.300x300.png?d2484c1b162c4272ba3db90159945b50", 
        followed:true, fullname: "Vlad", status: "i am a boss3", location: { city: "Minsk", country:"Belarus"} },
        
      ],
      pageSize:5,
      totalUsersCount: 0,
      currentPage:1,
      isFetching: true,

  };
 const usersReducer  = (state = initialState,action) => { 
     switch(action.type){
         case FOLLOW: 
          return {
            ...state,
             users: state.users.map(u => {
                 if (u.id === action.userId){
                     return {...u, followed: true}
                 }
                 return u;
             })
            }

         case UNFOLLOW:     
         return {
            ...state,
             users: state.users.map( u => {
                 if(u.id === action.userId){ 
                     return {...u, followed: false}
                 }
                 return u;
             })
            }
            case SET_USERS:{
                return { ...state, users: [ ...state.users, ...action.users]}
            }
            case TOOGLE_IS_FETCHING:{
                return { ...state, isFetching: action.isFetching}
            }
            // case SET_CURRENT_PAGE:{
            //     return { ...state,currentPage: action.currentPage]}
            // }
      default:
          return state;
     }
    };
    
export const follow = (userId) =>({type: FOLLOW, userId})
export const unfollow = (userId) =>({type: UNFOLLOW, userId})
export const setUsers = (users) =>({type: SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const toogleIsFetching = (isFetching) =>({type: TOOGLE_IS_FETCHING, isFetching})
export default usersReducer;