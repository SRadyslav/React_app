import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hey, how are you?", likesCount: 23 },
                { id: 2, message: "it's my first post", likesCount: 9 },
                { id: 3, message: "I'm so boring", likesCount: 44 },
                { id: 4, message: "today i do some cool stuff", likesCount: 53 },
                { id: 5, message: "Adorable dog", likesCount: 109 }
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sidebar: {

        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },

}








export default store;
