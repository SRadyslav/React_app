import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';


const SET_USER_DATA = "first-network/auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "first-network/auth/TOGGLE_IS_FETCHING";



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
})

export const getAuthUserData = () => async(dispatch) => {
    const response = await authAPI.me();
        if(response.data.resultCode === 0)
        {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
}

export const login = (email, password, rememberMe) => async(dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData())
        }
        else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "some Error";
            dispatch(stopSubmit("login", {_error: message}));
        }
}
export const logout = () => async(dispatch) => {
    const response =await authAPI.logout();
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false))
        }
}




export default authReducer;