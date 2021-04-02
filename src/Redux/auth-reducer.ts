import {authApi} from "../api/api";
import {ProfileReducerType, setUserProfile} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type UserDataType = {
    userId: string | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: UserDataType = initialState, action: authReducerType): UserDataType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

export type authReducerType = setAuthUserType

type setAuthUserType = {
    type: 'SET-USER-DATA'
    data: UserDataType
}

export const setAuthUserData = (userId: string | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserType => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, login, email, isAuth}
    }
}

export const getUserProfile = (userId: string) => {
    return (dispatch: (action: ProfileReducerType) => void) => {
        authApi.setProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<authReducerType>) => {
    return authApi.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })

}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, any, unknown, any> => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logout = (): ThunkAction<void, any, unknown, authReducerType> => (dispatch) => {
    authApi.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;