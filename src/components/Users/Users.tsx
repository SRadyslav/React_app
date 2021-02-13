import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FilterType, getUsers, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFilter, getFollowingInProgress, getPageSize, getTotalUsersCount, requestUsers } from "../../redux/users-selectors";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import s from "./Users.module.css";
import { UsersSearchForm } from "./UsersSearchForm";
import * as queryString from 'querystring'


type PropsType = {}
type QueryParamsType = {
    term?: string;
    page?: string;
    friend?: string;
}

export const Users:React.FC<PropsType> = () => {

    const totalCount= useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(requestUsers)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        
        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page) actualPage = Number(parsed.page)

        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        switch (parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])
    useEffect(() => {
        const query: QueryParamsType = {}
        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: "/developers",
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])
    
    const onPageChanged = (pageNumber:number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const unfollow_ = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const follow_ = (userId: number) => {
        dispatch(follow(userId))
    }



    return (
        <div className={s.users}>
            <UsersSearchForm onFilterChanged = {onFilterChanged} />

            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalCount={totalCount} pageSize={pageSize} />
            <div>
                {users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress} unfollow={unfollow_} follow={follow_} />
                )}
            </div>
        </div>
    )
}