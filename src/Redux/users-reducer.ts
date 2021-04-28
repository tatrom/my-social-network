import {UsersApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../Utils/object-helpers";


//initial state
let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUserCount: 0,
    isFetching: false,
    toggleIsFollowing: []
}

//reducer
const usersReducer = (state: UsersType = initialState, action: UsersReducerType): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})}
        case "UNFOLLOW":
            return {...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUserCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                toggleIsFollowing: action.isFetching
                    ? [...state.toggleIsFollowing, action.id]
                    : [...state.toggleIsFollowing.filter(id => id !== action.id)]
            }
        default:
            return state;
    }
}

// types
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null,
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    "followed": boolean
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFollowing: Array<number>

}

type FollowUserType = ReturnType<typeof followUserSuccess>
type UnfollowUserType = ReturnType<typeof unFollowUserSuccess>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type SetTotalUserCount = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export type UsersReducerType =
    | FollowUserType
    | UnfollowUserType
    | SetUsersType
    | SetCurrentPage
    | SetTotalUserCount
    | ToggleIsFetching
    | toggleFollowingProgressType


// action creators
export const followUserSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowUserSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users: users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    id
} as const)

//helpers
export const followUnfollowFlow = async (dispatch: Dispatch<UsersReducerType>, userId: number, apiMethod: Function, actionCreator: Function) => {
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


// thunks
export const getUsersAC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(toggleIsFetching(true))
    const response = await UsersApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setCurrentPage(currentPage))
}

export const unfollowUser = (userId: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    await followUnfollowFlow(dispatch, userId, UsersApi.unfollowUser.bind(UsersApi), unFollowUserSuccess)

}

export const followUser = (userId: number) => async (dispatch: Dispatch<UsersReducerType>) => {
    dispatch(toggleFollowingProgress(true, userId))
    await followUnfollowFlow(dispatch, userId, UsersApi.followUser.bind(UsersApi), followUserSuccess)
}


export default usersReducer