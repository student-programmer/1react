import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../asseds/images/user.png"
let Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [
    ];
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.setCurrentPage(p);
              }}
              className={props.currentPage === p && styles.selectedPage}
            >
              {p}
            </span>
          );
        })}
        <span className={styles.selectedPage}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <button> Get users </button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos != null ? u.photos.small : userPhoto}
                className={styles.photo}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
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
};
export default Users;