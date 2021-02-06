import { type } from 'os';
import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';


const SET_USER_DATA = "first-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "first-network/auth/GET_CAPTCHA_URL_SUCCESS";
//const TOGGLE_IS_FETCHING = "first-network/auth/TOGGLE_IS_FETCHING";


export type InitialStateType = typeof initialState;

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null  //if null, then captcha is not required
}


const authReducer = (state = initialState, action: SetAuthDataType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

type SetAuthDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
} | {
    captcha: string
}

type SetAuthDataType = {
    type: typeof SET_USER_DATA | typeof GET_CAPTCHA_URL_SUCCESS,
    payload: SetAuthDataPayloadType 
}

export const setAuthUserData = (userId:number| null, email: string| null, login: string| null, isAuth: boolean): SetAuthDataType  => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})
export const getCaptchaUrlSuccess = (captcha: string): SetAuthDataType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captcha} 
})
// export const toggleIsFetching = (isFetching) => ({
//     type: TOGGLE_IS_FETCHING,
//     isFetching,
// })

export const getAuthUserData = () => async (dispatch:any) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch:any) => {

    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(getAuthUserData())
    }

    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some Error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const logout = () => async (dispatch:any) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}




export default authReducer;