import { ProfilePhotoType, UsersType } from "../utils/types";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";


const FOllOW = "FOLLOW";
const UNFOllOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10 as number,
    totalCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, // array of users ids
}
type InitialStateType = typeof initialState;

type UsersReducerActionType= FollowSuccessActionType | UnfollowSuccessActionType |
    setCurrentPageActionType | setUsersActionType | setTotalUsersCountActionType |
    toggleIsFetchingActionType | toggleFollowingProgressActionType
const usersReducer = (state = initialState, action:UsersReducerActionType):InitialStateType => {
    switch (action.type) {
        case FOllOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOllOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ?
                    [...state.followingInProgress, action.userId]
                    :
                    [state.followingInProgress.filter(id => id != action.userId)],
            } as InitialStateType

        default:
            return state;
    }
};

type FollowSuccessActionType = {
    type: typeof FOllOW
    userId: number
}
export const followSuccess = (userId:number):FollowSuccessActionType => ({
    type: FOllOW,
    userId,
});

type UnfollowSuccessActionType = {
    type: typeof UNFOllOW
    userId: number
}
export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => ({
    type: UNFOllOW,
    userId,
});

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage:number):setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})

type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users:Array<UsersType>):setUsersActionType => ({
    type: SET_USERS,
    users,
})

type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount:number):setTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
})

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching:boolean):toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})

type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):toggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING,
    isFetching,
    userId,
})


export const getUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async(dispatch:any, userId:number, apiMethod:any, actionCreator: any) =>{
    dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);
                if (response.data.resultCode === 0) {
                    dispatch(actionCreator(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId:number) => {
    return  async (dispatch:any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId:number) => {

    return async (dispatch:any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}


export default usersReducer;