import { UsersType } from "../utils/types";
import { usersAPI } from "../api/users-api";
import { updateObjectInArray } from "../utils/object-helpers";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { Dispatch } from "redux";


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10 as number,
    totalCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, // array of users ids
}

const usersReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case "NW/USERS/FOllOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case "NW/USERS/UNFOllOW" :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case "NW/USERS/SET_CURRENT_PAGE" :
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case "NW/USERS/SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "NW/USERS/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case "NW/USERS/TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case "NW/USERS/TOGGLE_IS_FOLLOWING":
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



export const actions = {
    followSuccess: (userId:number) => ({type: "NW/USERS/FOllOW", userId} as const),
    unfollowSuccess: (userId:number) => ({type: "NW/USERS/UNFOllOW", userId} as const),
    setCurrentPage: (currentPage:number) => ({type: "NW/USERS/SET_CURRENT_PAGE", currentPage} as const),
    setUsers: (users:Array<UsersType>) => ({type: "NW/USERS/SET_USERS", users} as const),
    setTotalUsersCount: (totalCount:number) => ({type: "NW/USERS/SET_TOTAL_USERS_COUNT", totalCount} as const),
    toggleIsFetching: (isFetching:boolean) => ({type: "NW/USERS/TOGGLE_IS_FETCHING", isFetching} as const),
    toggleFollowingProgress: (isFetching:boolean, userId:number) => ({type: "NW/USERS/TOGGLE_IS_FOLLOWING", isFetching, userId} as const)
}


export const getUsers = (currentPage:number, pageSize:number):ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(actions.toggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}



//### type for apiMethod
const _followUnfollowFlow = async(dispatch: Dispatch<ActionsTypes>, userId:number, apiMethod:any, 
    actionCreator: (userId: number)=> ActionsTypes ) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);
                if (response.data.resultCode === 0) {
                    dispatch(actionCreator(userId));
                }
                dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId:number): ThunkType => {
    return  async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}
export const unfollow = (userId:number): ThunkType => {

    return async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}


export default usersReducer


type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
