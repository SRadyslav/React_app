import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.png"
import { NavLink } from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount/
        props.pageSize);
let pages =[];
for(let i = 1; i <= pagesCount; i++) {
pages.push(i);
}

    return(
    <div className={s.users}>
            <div className={s.selectPage}>
            {pages.map(p => {
                return <span
                onClick={(e) => {
                    props.onPageChanged(p);
                } }
                className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
            </div>
                {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                        <NavLink to= {"/profile/" + u.id}>
                            <img className={s.usersImg} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
    )
}

export default Users;