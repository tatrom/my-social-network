import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: "SET-INITIALIZED"} as const)

type ActionType =
    | SetInitializedType

type SetInitializedType = ReturnType<typeof initializedSuccess>

export const InitializeApp = (): ThunkAction<void, RootStateType, unknown, ActionType> => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

type InitialStateType = typeof initialState

