import {Dispatch} from "redux";
import {profileApi} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";
import {getUserProfile} from "./auth-reducer";
import {FormAction, stopSubmit} from "redux-form";


//initial state
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

//reducer
const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
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
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile,}
        case 'SET-STATUS':
            return {...state, status: action.status}
        case 'DELETE_POST':
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        case 'SET_PHOTOS_SUCCESS':
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.photos}}
            }
            return {...state}
        default:
            return state;
    }
}

//types
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
type AddPostActionType = ReturnType<typeof addPost>
type ChangeNewTextActionType = ReturnType<typeof updateNewPostText>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type DeletePostType = ReturnType<typeof deletePost>
type GetStatusType = ReturnType<typeof setStatus>
type SetPhotoSuccessType = ReturnType<typeof setPhotoSuccess>

export type ProfileReducerType =
    AddPostActionType
    | ChangeNewTextActionType
    | SetUserProfileType
    | GetStatusType
    | DeletePostType
    | SetPhotoSuccessType

type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ProfileReducerType | FormAction>

// action creators
export const addPost = (postText: string) => ({type: 'ADD-POST', postText} as const)
export const updateNewPostText = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE_POST', postId} as const)
export const setPhotoSuccess = (photos: { small: string, large: string }) => ({
    type: 'SET_PHOTOS_SUCCESS',
    photos
} as const)

//thunks
export const SetStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.setStatus(userId)
    dispatch(setStatus(response.data))
}
export const UpdateStatus = (title: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(title)
    if (response.data.resultCode === 0) {
        debugger;
        dispatch(setStatus(title))
    }
}

export const setPhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileApi.setPhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().Auth.userId
    const response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        userId && dispatch(getUserProfile(userId))
    } else {
        // let errorMessage = response.data.messages[0].split('->')
        let finalErrorMessage = response.data.messages[0].split('->')[1].split(')')[0]
        finalErrorMessage = finalErrorMessage === 'MainLink' ? 'mainLink' : finalErrorMessage.toLowerCase()
        dispatch(stopSubmit('edit-profile', {"contacts": {[finalErrorMessage]: response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0])
    }
}
export default profileReducer