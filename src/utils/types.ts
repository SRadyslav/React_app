import { AppStateType } from "../redux/redux-store"

export type ProfilePhotoType = {
    large: string | null
    small: string | null
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: ProfilePhotoType
}
export type UsersType = {
    name: string
    id: number
    photos: ProfilePhotoType
    status: string | null
    followed: boolean
}

export type GetStateType = () => AppStateType