import { usersAPI } from '../api/api';
import { profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_STATUS = "SET-STATUS";


let initialState = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 23 },
        { id: 2, message: "it's my first post", likesCount: 9 },
        { id: 3, message: "I'm so boring", likesCount: 44 },
        { id: 4, message: "today i do some cool stuff", likesCount: 53 },
        { id: 5, message: "Adorable dog", likesCount: 109 }
    ],
    newPostText: "",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const getStatus = (userId) =>(dispatch) => {
    profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
} 
export const updateStatus = (status) =>(dispatch) => {
    profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0){
                dispatch(setStatus(status));
                }
            });
} 
export const getUserProfile = (userId) =>(dispatch) => {
    usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
} 


export default profileReducer;