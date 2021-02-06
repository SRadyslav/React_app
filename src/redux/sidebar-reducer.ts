import { act } from "react-dom/test-utils";

type InitialStateType = typeof initialState;
let initialState = {
};

type sidebarReducerActionType = any;
const sidebarReducer = (state=initialState, action:sidebarReducerActionType) =>{
    return(state);
}

export default sidebarReducer;
