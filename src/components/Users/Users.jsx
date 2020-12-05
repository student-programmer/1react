import React from "react";
import styles from "./users.modyle.css";
const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers({users: [
            { id: 1, photoUrl:"https://c0.klipartz.com/pngpicture/1019/544/sticker-png-president-of-the-united-states-presidential-1-coin-program-dollar-coin-coin-medal-gold.png",
            followed:true, fullname: "Roma", status: "i am a boss1", location: { city: "Simferopol", country:"Russia"} },
           { id: 1, photoUrl:"https://c0.klipartz.com/pngpicture/1019/544/sticker-png-president-of-the-united-states-presidential-1-coin-program-dollar-coin-coin-medal-gold.png",
           followed:false, fullname: "Ignat", status: "i am a boss2", location: { city: "Sevastopol", country:"Russia"} },
           { id: 1, photoUrl:"https://c0.klipartz.com/pngpicture/1019/544/sticker-png-president-of-the-united-states-presidential-1-coin-program-dollar-coin-coin-medal-gold.png", 
           followed:true, fullname: "Vlad", status: "i am a boss3", location: { city: "Minsk", country:"Belarus"} },
        ]
      })
    }

  return (
    <div>
      {props.users.map( u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.Photo}/>
            </div>
            <div>
                {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={() => {props.follow(u.id) }}>Follow</button>}
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

export default Users;