import { AppStateType } from './redux-store';
import {createSelector} from "reselect"


const requestUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const requestUsers = createSelector(requestUsersSelector,
    (users) => {
        return users.filter(u => true)
    })

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
