import React from "react";
import {connect} from "react-redux";
import {ActionTypes, StateType, UserType} from "../../Redux/state";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../Redux/users-reducer";
import axios from "axios";
import {Users} from './UsersDump'
import {Preloader} from "../common/Preloader/Preloader";

type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number
    isFetching: boolean
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users} currentPage={this.props.currentPage} followUser={this.props.followUser}
                   onPageChanged={this.onPageChanged} pageSize={this.props.pageSize}
                   setCurrentPage={this.props.setCurrentPage} totalUserCount={this.props.totalUserCount}
                   unfollowUser={this.props.unfollowUser}/>
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

let MapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}

export default connect(MapStateToProps, MapDispatchToProps)(UsersContainer)