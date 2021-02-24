import React from "react";
import {connect} from "react-redux";
import {ActionTypes, StateType, UserType} from "../../Redux/state";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollowUser,
    toggleFollowingProgress
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from './UsersDump'
import {Preloader} from "../common/Preloader/Preloader";
import {UsersApi} from "../../api/api";

type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    isFetching: boolean
    toggleIsFollowing: Array<number>
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

export class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} currentPage={this.props.currentPage} followUser={this.props.followUser}
                   onPageChanged={this.onPageChanged} pageSize={this.props.pageSize}
                   setCurrentPage={this.props.setCurrentPage} totalUserCount={this.props.totalUserCount}
                   unfollowUser={this.props.unFollowUser}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   toggleIsFollowing={this.props.toggleIsFollowing}
            />
        </>
    }
}

let MapStateToProps = (state: StateType) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUserCount: state.Users.totalUserCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching,
        toggleIsFollowing: state.Users.toggleIsFollowing

    }
}


export default connect(MapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)