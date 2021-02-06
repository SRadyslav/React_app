import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";



export type InitialStateType = {
    initialized: boolean,
}

let initialState = {
    initialized: false,
    //globalError: null,
}


const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS,
}

export const initializedSuccess = ():InitializedSuccessType => ({
    type: INITIALIZED_SUCCESS
})


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess()); /*accidentally dispatch InitializeApp instead initializedSuccess and overflow stack*/ 
    })
}





export default appReducer;