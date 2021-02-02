import React from "react";
import s from "./Users.module.css"
import Pagination from "../Common/Pagination/Pagination"
import User from "./User";


let Users = ({ currentPage, onPageChanged, totalCount, pageSize, ...props }) => {
    return (
        <div className={s.users}>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalCount={totalCount} pageSize={pageSize} />
            <div>
                {props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
                )}
            </div>
        </div>
    )
}

export default Users;