import {RootStateType} from "./redux-store";

export const getUsers = (state: RootStateType) => {
    return state.Users.users
}

export const getPageSize = (state: RootStateType) => {
    return state.Users.pageSize
}

export const getCurrentPage = (state: RootStateType) => {
    return state.Users.currentPage
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.Users.totalUserCount
}

export const getIsFollowing = (state: RootStateType) => {
    return state.Users.toggleIsFollowing
}

export const getIsFetching = (state: RootStateType) => {
    return state.Users.isFetching
}

