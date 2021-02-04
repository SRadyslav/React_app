import { usersAPI } from '../api/api';
import { profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";


let initialState = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 23 },
        { id: 2, message: "it's my first post", likesCount: 9 },
        { id: 3, message: "I'm so boring", likesCount: 44 },
        { id: 4, message: "today i do some cool stuff", likesCount: 53 },
        { id: 5, message: "Adorable dog", likesCount: 109 }
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos : action.photos},
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

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
})
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
})


export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
                dispatch(setStatus(response.data));
} 
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
                if(response.data.resultCode===0){
                dispatch(setStatus(status));
                }
} 
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
                if(response.data.resultCode===0){
                dispatch(savePhotoSuccess(response.data.data.photos));
                }
} 
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
                dispatch(setUserProfile(response.data));
} 


export default profileReducer;