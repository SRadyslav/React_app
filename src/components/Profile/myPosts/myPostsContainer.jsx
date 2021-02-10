import React from 'react';
import { connect } from 'react-redux';
import { actions} from '../../../redux/profile-reducer';
import MyPosts from './myPosts';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        //postPhoto: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(actions.addPostActionCreator(newPostText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;