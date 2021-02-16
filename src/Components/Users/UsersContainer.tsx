import React from "react";
import {connect} from "react-redux";
import {ActionTypes, StateType, UserType} from "../../Redux/state";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import {Users} from "./Users";

let MapStateToProps = (state: StateType) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUserCount: state.Users.totalUserCount,
        currentPage: state.Users.currentPage
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
        }

    }
}

export const UserContainer = connect(MapStateToProps, MapDispatchToProps)(Users)