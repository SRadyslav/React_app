import { AxiosPromise } from 'axios';
import React from 'react'
import { instance, ResultCodeEnum, ResultCodeForCaptchaEnum,APIResponseType } from './api';




type MeResponseDataType = {
    id:number
    email: string 
    login:string
}
type LoginResponseType = {userId:number}
type LoginResultCodeType = ResultCodeEnum | ResultCodeForCaptchaEnum

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res=>res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType, LoginResultCodeType>>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`) as AxiosPromise<APIResponseType> ;
    },
    }
