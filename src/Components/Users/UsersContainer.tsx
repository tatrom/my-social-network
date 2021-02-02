import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionTypes, StateType, UserType} from "../../Redux/state";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let MapStateToProps = (state: StateType) => {
    return {
        users: state.Users.users
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
        }
    }
}

export const UserContainer = connect(MapStateToProps, MapDispatchToProps)(Users)