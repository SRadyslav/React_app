import { Dispatch } from 'redux';
import { getAuthUserData } from './auth-reducer';
import { AppStateType, BaseThunkType, InferActionsTypes } from './redux-store';


let initialState = {
    initialized: false
    //globalError: null,
}


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/APP/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};



export const actions = {
    initializedSuccess: () => ({type: "SN/APP/INITIALIZED_SUCCESS"} as const)
}

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(()=>{
        dispatch(actions.initializedSuccess());
    })
}


export default appReducer


export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>