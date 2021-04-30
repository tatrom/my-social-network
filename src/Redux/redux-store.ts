import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
let reducers = combineReducers({
    DialogPage: dialogReducer,
    ProfilePage: profileReducer,
    Users: usersReducer,
    Auth: authReducer,
    form: formReducer,
    app: appReducer
});

export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)))
export type RootStateType = ReturnType<typeof reducers>
export default store;