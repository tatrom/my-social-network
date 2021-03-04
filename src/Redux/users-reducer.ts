import {UsersApi} from "../api/api";

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

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUserCount: 0,
    isFetching: false,
    toggleIsFollowing: []
}

const usersReducer = (state: UsersType = initialState, action: usersReducerType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

export type usersReducerType =
    FollowUserType
    | UnfollowUserType
    | SetUsersType
    | SetCurrentPage
    | SetTotalUserCount
    | ToggleIsFetching
    | toggleFollowingProgressType

type FollowUserType = {
    type: "FOLLOW"
    userId: number
}

type UnfollowUserType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersType = {
    type: "SET_USERS"
    users: Array<UserType>
}

type SetCurrentPage = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type SetTotalUserCount = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}

type ToggleIsFetching = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

export type toggleFollowingProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching: boolean,
    id: number
}


export const followUserSuccess = (userId: number): FollowUserType => ({type: FOLLOW, userId})
export const unFollowUserSuccess = (userId: number): UnfollowUserType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUserCount => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching: boolean, id: number): toggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: (action: usersReducerType) => void) => {
        dispatch(toggleIsFetching(true))
        UsersApi.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))
            }
        )
    }
}

export const unfollowUser = (userId: number) => {
    return (dispatch: (action: usersReducerType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowUserSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const followUser = (userId: number) => {
    return (dispatch: (action: usersReducerType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followUserSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}


export default usersReducer