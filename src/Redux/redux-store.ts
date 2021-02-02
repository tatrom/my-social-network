import {combineReducers,createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    Users: usersReducer
});
let store = createStore(reducers)
export default store;