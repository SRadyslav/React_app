import React from 'react';
import s from './myPosts.module.css';
import Post from './Post/Post.jsx';








const MyPosts = (props) => {
    let postsElements = props.posts
.map(posts => <Post message={posts.message} likeCount= {posts.likesCount} />)

    return(
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;