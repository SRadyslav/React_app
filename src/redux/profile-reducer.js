const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
        posts: [
            { id: 1, message: "Hey, how are you?", likesCount: 23 },
            { id: 2, message: "it's my first post", likesCount: 9 },
            { id: 3, message: "I'm so boring", likesCount: 44 },
            { id: 4, message: "today i do some cool stuff", likesCount: 53 },
            { id: 5, message: "Adorable dog", likesCount: 109 }
        ],
        newPostText: "",
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer;