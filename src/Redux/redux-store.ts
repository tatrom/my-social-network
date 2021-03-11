import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
let reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    Users: usersReducer,
    Auth: authReducer,
    form: formReducer
});
let store = createStore(reducers, applyMiddleware(ThunkMiddleware))
export type RootStateType = ReturnType<typeof reducers>
export default store;