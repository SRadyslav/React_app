const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        { id: 1, name: "Akashi" },
        { id: 2, name: "Shenko" },
        { id: 3, name: "Rina" },
        { id: 4, name: "Venev" },
        { id: 5, name: "Garage" }
    ],
    messages: [
        { id: 1, message: "hey bro" },
        { id: 2, message: "yo" },
        { id: 3, message: "How's life?" },
        { id: 4, message: "not complain" },
        { id: 5, message: "how about go some bar?" }
    ],
    newMessageText: "",
};


const dialogsReducer = (state= initialState, action) =>{
    
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export default dialogsReducer;