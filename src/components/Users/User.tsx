import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.png"
import { NavLink } from "react-router-dom";
import { UsersType } from "../../utils/types";


type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void

}

const User: React.FC<PropsType> = ({user, ...props}) => {
    return (
        <div className = {s.user}>
            <div className={s.PhotoButton}>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img className={s.usersImg} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => { props.unfollow(user.id); }} >
                            Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => { props.follow(user.id); }} >
                            Follow</button>}
                </div>
            </div>
            <div>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status ? user.status : "The user was too lazy and did not leave the status"}</div>
                </span>
                <span>
                    {/* <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div> */}
                </span>
            </div>
        </div>)
}

export default User;