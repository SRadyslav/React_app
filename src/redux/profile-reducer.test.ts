import profileReducer, {actions} from "./profile-reducer";


// type StateType ={
//     posts: Array<PostsType>
// }


let state = {
    posts: [
        { id: 1, message: "Hey, how are you?", likesCount: 23 },
        { id: 2, message: "it's my first post", likesCount: 9 },
        { id: 3, message: "I'm so boring", likesCount: 44 },
        { id: 4, message: "today i do some cool stuff", likesCount: 53 },
        { id: 5, message: "Adorable dog", likesCount: 109 }
    ],
    profile: null,
    status: "",
    newPostText: ''
};

test('length of post should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("Samurai_way");
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(6);
});

test('after deleting length of messages should be decremented', () => {
    // 1. test data
    let action = actions.deletePost(1);
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct ', () => {
    // 1. test data
    let action = actions.addPostActionCreator("Samurai_way");
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts[5].message).toBe("Samurai_way");
});
test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = actions.deletePost(123);
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});







