const SEND_MESSAGE = "SEND-MESSAGE";


type Dialog= {
    id: number
    name: string
} 
type Message= {
    id: number
    message: string
}

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

export type InitialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: sendMessageActionType) => {

    switch (action.type) {
        case SEND_MESSAGE: {
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

type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const sendMessageActionCreator = (newMessageText: string) => ({
    type: SEND_MESSAGE,
    newMessageText,
})

export default dialogsReducer;