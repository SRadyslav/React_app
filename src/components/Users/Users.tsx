import React from "react";
import s from "./Users.module.css"
import Pagination from "../Common/Pagination/Pagination"
import User from "./User";


type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
    totalCount: number
    pageSize: number
    users: Array<import("../../utils/types").UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users:React.FC<PropsType> = ({ currentPage, onPageChanged, totalCount, pageSize, users, ...props }) => {
    return (
        <div className={s.users}>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalCount={totalCount} pageSize={pageSize} />
            <div>
                {users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
                )}
            </div>
        </div>
    )
}

export default Users;