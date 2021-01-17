const FOllOW = "FOLLOW";
const UNFOllOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialState = {

    users: [
        
    ],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOllOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOllOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
};

export const followAC = (userId) => ({
    type: FOllOW,
    userId,
});

export const unfollowAC = (userId) => ({
    type: UNFOllOW,
    userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
})



export default usersReducer;