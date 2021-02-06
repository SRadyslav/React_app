import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
import {PostsType, ProfilePhotoType, ContactsType, ProfileType} from "../utils/types"

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";



export type InitialStateType = typeof initialState;

let initialState = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 23 },
        { id: 2, message: "it's my first post", likesCount: 9 },
        { id: 3, message: "I'm so boring", likesCount: 44 },
        { id: 4, message: "today i do some cool stuff", likesCount: 53 },
        { id: 5, message: "Adorable dog", likesCount: 109 }
    ] as Array<PostsType>, 
    profile: null as ProfileType | null,
    status: "" as string,
    newPostText: ''
};
type profileReducerActionType = addPostActionCreatorType | savePhotoSuccessActionType |
setUserProfileActionType | setStatusActionType | deletePostActionType

const profileReducer = (state = initialState, action:profileReducerActionType):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        default:
            return state;
    }
}

type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPostActionCreator = (newPostText:string):addPostActionCreatorType => ({
    type: ADD_POST,
    newPostText,
})

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
} 
export const setUserProfile = (profile:ProfileType):setUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile,
})
type setStatusActionType = {type: typeof SET_STATUS
    status: string}
export const setStatus = (status:string):setStatusActionType => ({
    type: SET_STATUS,
    status,
})
type deletePostActionType = {type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId:number):deletePostActionType => ({
    type: DELETE_POST,
    postId,
})
type savePhotoSuccessActionType = {type: typeof SAVE_PHOTO_SUCCESS
    photos: ProfilePhotoType}
export const savePhotoSuccess = (photos:ProfilePhotoType):savePhotoSuccessActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
})


export const getStatus = (userId:number) => async (dispatch:any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status:string) => async (dispatch:any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file:any) => async (dispatch:any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}
export const getUserProfile = (userId:number) => async (dispatch:any) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}


export default profileReducer;