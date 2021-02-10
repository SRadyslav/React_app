import { stopSubmit } from 'redux-form';
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api';
import {authAPI} from '../api/auth-api';
import { securityAPI} from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null  //if null, then captcha is not required
}


const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FN/auth/SET_USER_DATA":
        case "FN/auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    setAuthUserData: (userId:number| null, email: string| null, login: string| null, isAuth: boolean) => ({
        type: "FN/auth/SET_USER_DATA", payload: { userId, email, login, isAuth }} as const),
    getCaptchaUrlSuccess: (captcha: string) => ({
        type: "FN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captcha}} as const)

}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me();
        if (meData.resultCode === ResultCodeEnum.Success) {
        let { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {

    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeEnum.Success) {
        // success, get auth data
        dispatch(getAuthUserData())
    }

    else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "some Error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const logout = ():ThunkType => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer


type ThunkType = BaseThunkType<ActionType | ReturnType<typeof stopSubmit>>
export type InitialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>