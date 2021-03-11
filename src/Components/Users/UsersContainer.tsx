import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    followUser,
    setCurrentPage,
    setUsers,
    unfollowUser,
    toggleFollowingProgress, getUsers, UserType
} from "../../Redux/users-reducer";
import {Users} from './UsersDump'
import {Preloader} from "../common/Preloader/Preloader";
import {RootStateType} from "../../Redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    isFetching: boolean
    toggleIsFollowing: Array<number>
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} currentPage={this.props.currentPage} followUser={this.props.followUser}
                   onPageChanged={this.onPageChanged} pageSize={this.props.pageSize}
                   setCurrentPage={this.props.setCurrentPage} totalUserCount={this.props.totalUserCount}
                   unfollowUser={this.props.unfollowUser}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   toggleIsFollowing={this.props.toggleIsFollowing}
            />
        </>
    }
}

let MapStateToProps = (state: RootStateType) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUserCount: state.Users.totalUserCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching,
        toggleIsFollowing: state.Users.toggleIsFollowing

    }
}

export default compose<ComponentType>(connect(MapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}), WithAuthRedirect)(UsersContainer)