import axios from "axios";
///### fix issue when u log out and click profile UI send get() on server first and then redirect to login and if spam this app


export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "2dd72eef-802e-4320-bbb3-7057aa545a8d",
  }
})

export type APIResponseType<D={}, RC = ResultCodeEnum> = {
  data: D
  resultCode: RC
  messages: Array<string>
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type GetItemsType<T> ={
  items: T
  totalCount: number
  error: string | null
}


