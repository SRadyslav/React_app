import * as axios from "axios";


const instance = axios.create({
  //  withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    // headers: {
    //     "API-KEY": "",
    // }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) 
    {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {return response.data});
            }
}
