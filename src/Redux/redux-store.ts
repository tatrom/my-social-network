import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    Users: usersReducer,
    Auth: authReducer
});
let store = createStore(reducers)
export type RootStateType = ReturnType<typeof reducers>
export default store;