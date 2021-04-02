import {Dispatch} from "redux";
import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE"

export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        [key: string]: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

let initialState = {
    posts: [
        {id: 1, message: "Its a first post", likes: 3},
        {id: 2, message: "Its a second post", likes: 3},
        {id: 3, message: "Its a third post", likes: 3},
        {id: 4, message: "Its a fourth post", likes: 3},
        {id: 5, message: "Its a fifth post", likes: 3},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let text = action.postText.trim()
            const stateCopy = {...state, posts: [...state.posts]}
            if (text) {
                let newPost: PostType = {
                    id: 1,
                    message: text,
                    likes: 5
                }
                stateCopy.posts.push(newPost)
            }
            return stateCopy
        case SET_USER_PROFILE:
            return {...state, profile: action.profile,}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}

type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}
type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type SetUserProfile = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}

type GetStatusType = ReturnType<typeof setStatus>

export type ProfileReducerType = AddPostActionType | ChangeNewTextActionType | SetUserProfile | GetStatusType

export const addPost = (postText: string): AddPostActionType => ({type: ADD_POST, postText})
export const updateNewPostText = (newText: string): ChangeNewTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})
export const setUserProfile = (profile: ProfileType): SetUserProfile => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

export const SetStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.setStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const UpdateStatus = (title: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(title).then(response => {
        if (response.data.resultCode === 0) {
            debugger;
            dispatch(setStatus(title))
        }
    })
}

export default profileReducer