import {ActionTypes, UsersType, UserType} from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUserCount: 0,
    isFetching: false
}

const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
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
        default:
            return state;
    }
}

export const followAC = (userId: number): ActionTypes => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): ActionTypes => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): ActionTypes => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage: number): ActionTypes => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): ActionTypes => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetchingAC = (isFetching: boolean): ActionTypes => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer