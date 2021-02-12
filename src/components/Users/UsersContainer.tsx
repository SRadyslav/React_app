import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from "../../redux/redux-store";
import {follow, unfollow, getUsers, FilterType} from "../../redux/users-reducer";
import {
    getCurrentPage, getPageSize, getTotalUsersCount, requestUsers,
    getIsFetching, getFollowingInProgress, getFilter
} from "../../redux/users-selectors";
import { UsersType } from "../../utils/types";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalCount:number
    users: Array<UsersType>
    followingInProgress: Array<number>
    filter: FilterType

}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number)=> void
    getUsers: (currentPage:number, pageSize:number, filter: FilterType ) => void
}

type OwnPropsType = {
    
}

type PropsType = MapDispatchPropsType & OwnPropsType & MapStatePropsType



class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const { currentPage, pageSize, filter } = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    }

    onPageChanged = (pageNumber:number) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(pageNumber, pageSize, filter);
    };
    onFilterChanged = (filter: FilterType) => {
        const { pageSize} = this.props;
        this.props.getUsers(1, pageSize, filter);
    }
    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users onPageChanged={this.onPageChanged}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                onFilterChanged = {this.onFilterChanged}
            />
        </>
        )
    }
}



let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        unfollow, follow, getUsers
    }),
    withAuthRedirect
)(UsersContainer)