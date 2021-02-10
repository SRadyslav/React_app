import { UsersType } from './../utils/types';
import { instance, GetItemsType, APIResponseType } from './api';
import React from 'react'


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get<GetItemsType<Array<UsersType>>>(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => res.data);
    },

    follow(userId:number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
};