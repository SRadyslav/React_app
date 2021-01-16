import React from 'react';
import s from './myPosts.module.css';
import Post from './Post/Post.jsx';





const MyPosts = (props) => {
    let postsElements = props.posts
        .map(posts => <Post message={posts.message} likeCount={posts.likesCount} key={posts.id} />);



    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };



    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}
                        placeholder="Enter your post text"
                    />
                </div>
                <div>
                    <button onClick={onAddPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;