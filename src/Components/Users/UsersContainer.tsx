import React from "react";
import {connect} from "react-redux";
import {ActionTypes, StateType, UserType} from "../../Redux/state";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollowUser
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
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
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
                   unfollowUser={this.props.unFollowUser}/>
        </>
    }
}

let MapStateToProps = (state: StateType) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUserCount: state.Users.totalUserCount,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching

    }
}


export default connect(MapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)