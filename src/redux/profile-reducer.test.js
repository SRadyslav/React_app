import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 23 },
        { id: 2, message: "it's my first post", likesCount: 9 },
        { id: 3, message: "I'm so boring", likesCount: 44 },
        { id: 4, message: "today i do some cool stuff", likesCount: 53 },
        { id: 5, message: "Adorable dog", likesCount: 109 }
    ]
};

test('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Rokkuro_the_best");
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(6);
});

test('after deleting length of messages should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});



