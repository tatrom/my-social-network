import {ActionTypes, UsersType, UserType} from "./state";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Roman",
            status: "React developer",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            photo: "https://www.thebalancecareers.com/thmb/BOjyOw3eW7uaNyBaz6vo3ozM4Mg=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():saturation(0.2):brightness(10):contrast(5)/GettyImages-746096729-5bf437b0c9e77c005126418a.jpg"
        },
        {
            id: 2,
            followed: true,
            fullName: "Anna ",
            status: "office manager",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            photo: "https://www.thebalancecareers.com/thmb/BOjyOw3eW7uaNyBaz6vo3ozM4Mg=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():saturation(0.2):brightness(10):contrast(5)/GettyImages-746096729-5bf437b0c9e77c005126418a.jpg"
        },
        {
            id: 3,
            followed: false,
            fullName: "Renat ",
            status: "student",
            location: {
                city: "Kiev",
                country: "Ukraine"
            },
            photo: "https://www.thebalancecareers.com/thmb/BOjyOw3eW7uaNyBaz6vo3ozM4Mg=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():saturation(0.2):brightness(10):contrast(5)/GettyImages-746096729-5bf437b0c9e77c005126418a.jpg"

        },
    ]
}

const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default: return state;
    }
}

export const followAC = (userId: number): ActionTypes => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): ActionTypes => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): ActionTypes => ({type: SET_USERS, users: users})

export default usersReducer