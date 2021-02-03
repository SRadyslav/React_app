import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress, unfollow, getUsers
} from "../../redux/users-reducer";
import {
    getCurrentPage, getPageSize, getTotalUsersCount, requestUsers,
    getIsFetching, getFollowingInProgress
} from "../../redux/users-selectors";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);
    };

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
            />
        </>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)