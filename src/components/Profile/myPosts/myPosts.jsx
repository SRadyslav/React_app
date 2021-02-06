import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls.js';
import s from './myPosts.module.css';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);



const MyPosts = (props) => {
    
    let postsElements = props.posts
        .map(posts => <Post message={posts.message} likeCount={posts.likesCount} key={posts.id} postPhoto={props.postPhoto} />);

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
            <Field component={Textarea} name={"newPostText"} 
                placeholder={"Enter your post text"} validate={[required, maxLength10]}
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