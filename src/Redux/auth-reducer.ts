import {AuthApi} from "../api/api";
import {ProfileReducerType, setUserProfile} from "./profile-reducer";

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
            return {...state, ...action.data, isAuth: true}
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

export const setAuthUserData = (userId: string, login: string, email: string, isAuth: boolean): setAuthUserType => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, login, email, isAuth}
    }
}

export const getUserProfile = (userId: string) => {
    return (dispatch: (action: ProfileReducerType) => void) => {
        AuthApi.setProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const authMe = () => {
    return (dispatch: (action: authReducerType) => void) => {
        AuthApi.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export default authReducer;