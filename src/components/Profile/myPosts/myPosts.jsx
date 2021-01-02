import React from 'react';
import s from './myPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hey, how are you?" likeCount= "23" />
            <Post message= "it's my first post" likeCount= "1" />
            <Post message= "I'm so boring" likeCount= "9" />
        </div>
    );
}

export default MyPosts;