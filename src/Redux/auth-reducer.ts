import {authApi, profileApi} from "../api/api";
import {ProfileReducerType, setUserProfile} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

//initial state
let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

//reducer
const authReducer = (state: UserDataType = initialState, action: authReducerType): UserDataType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}


// types
export type UserDataType = {
    userId: string | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type setAuthUserType = ReturnType<typeof setAuthUserData>
export type authReducerType = setAuthUserType


export const setAuthUserData = (userId: string | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    data: {userId, login, email, isAuth}
} as const)


// thunks
export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ProfileReducerType>) => {
    const response = await profileApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getAuthUserData = () => async (dispatch: Dispatch<authReducerType>) => {
    const response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, any, unknown, any> => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        await dispatch(getAuthUserData())
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = (): ThunkAction<void, any, unknown, authReducerType> => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;