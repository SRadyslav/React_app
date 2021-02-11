import React from 'react';
import { connect } from 'react-redux';
import { actions} from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostsType } from '../../../utils/types';
import MyPosts from './myPosts';



let mapStateToProps = (state: AppStateType): MapPropsType => {
    return {
        posts: state.profilePage.posts,
        postPhoto: state.profilePage.profile?.photos.small
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: actions.addPost}) (MyPosts);

export default MyPostsContainer

type MapPropsType = {
    posts: Array<PostsType>
    postPhoto: string | undefined
}
type DispatchPropsType = {
    addPost: (newPostText: string) => void
} 
