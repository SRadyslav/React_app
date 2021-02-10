import { profileAPI } from '../api/profile-api';
import { stopSubmit, FormAction } from 'redux-form';
import {PostsType, ProfilePhotoType, ProfileType} from "../utils/types"
import { BaseThunkType, InferActionsTypes } from './redux-store';


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


const profileReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case "NW/PROFILE/ADD-POST":
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
        case "NW/PROFILE/SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        case "NW/PROFILE/SET-STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "NW/PROFILE/SAVE-PHOTO-SUCCESS":
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType,
            };
        case "NW/PROFILE/DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText:string) => ({type: "NW/PROFILE/ADD-POST", newPostText} as const),
    setUserProfile: (profile:ProfileType) => ({type: "NW/PROFILE/SET-USER-PROFILE", profile} as const),
    setStatus: (status:string) => ({type: "NW/PROFILE/SET-STATUS", status} as const),
    deletePost: (postId:number) => ({type: "NW/PROFILE/DELETE-POST", postId} as const),
    savePhotoSuccess: (photos:ProfilePhotoType) => ({type: "NW/PROFILE/SAVE-PHOTO-SUCCESS", photos} as const)
}




export const getStatus = (userId:number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status:string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file:File):ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile:ProfileType):ThunkType => 
    async (dispatch, getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if(userId != null){
        dispatch(getUserProfile(userId));
        } else{
            throw Error("userId can't be null")
        }
    }
    else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}
export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}


export default profileReducer


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


