import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './myPosts.module.css';
import Post from './Post/Post.jsx';





const MyPosts = (props) => {
    let postsElements = props.posts
        .map(posts => <Post message={posts.message} likeCount={posts.likesCount} key={posts.id} />);

    const onSubmit = (formData) =>{
        props.addPost(formData.newPostText);
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onSubmit} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
        <div>
            <Field component={"textarea"} name={"newPostText"} 
                placeholder={"Enter your post text"}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}
const AddPostReduxForm = reduxForm({form:"profileAddPostForm"})(AddPostForm)
export default MyPosts;