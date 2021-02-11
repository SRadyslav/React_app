import { InferActionsTypes } from "./redux-store";





let initialState = {
    dialogs: [
        { id: 1, name: "Akashi" },
        { id: 2, name: "Shenko" },
        { id: 3, name: "Rina" },
        { id: 4, name: "Venev" },
        { id: 5, name: "Garage" }
    ] as Array<Dialog>,
    messages: [
        { id: 1, message: "hey bro" },
        { id: 2, message: "yo" },
        { id: 3, message: "How's life?" },
        { id: 4, message: "not complain" },
        { id: 5, message: "how about go some bar?" }
    ] as Array<Message>,
};


const dialogsReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case "SN/DIALOGS/SEND-MESSAGE": {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageText,
            };
            return { 
                ...state,
                messages: [...state.messages,newMessage],
            };
        }
        default:
            return state;
    }
}
export const actions = {
    sendMessage: (newMessageText: string) => ({type: "SN/DIALOGS/SEND-MESSAGE", newMessageText,} as const)
}


export default dialogsReducer


type Dialog= {
    id: number
    name: string
} 
type Message= {
    id: number
    message: string
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>