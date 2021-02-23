import {ActionTypes, AuthDataType} from "./state";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: AuthDataType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        default:
            return state;
    }
}

export const setAuthUserData = (id: string, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
})


export default authReducer