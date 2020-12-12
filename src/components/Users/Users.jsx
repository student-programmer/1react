import * as axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../asseds/images/user.png"
class Users extends React.Component{
//   constructor(props) {
//     super(props);
//           axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
//           .then(response => console.log("response", response.drinks))
          
// }
    render(){
      return (
        <div>
          <button>Get users</button>
          {this.props.users.map( u => (
            <div key={u.id}>
              <span>
                <div>
                  <img src={u.photos != null ? u.photos.small : userPhoto} className={styles.photo}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {this.props.follow(u.id) }}>Follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.fullname}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      ); 
    }
}

export default Users;