import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import UserContainer from "./Components/Users/UsersContainer";
import HeaderContainer from './Components/Header/HeaderContainer';
import {connect} from "react-redux";
import {RootStateType} from "./Redux/redux-store";
import {InitializeApp} from "./Redux/app-reducer";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const Login = React.lazy(() => import("./Components/Login/Login"))
type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    InitializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className="App">

                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"App_content"}>
                        <Switch>
                            <Route path={"/"} exact render={() => <Redirect to={'/profile'}/>}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            <Route path="/news"/>
                            <Route path="/music"/>
                            <Route path="/settings"/>
                            <Route path="/users" render={() => <UserContainer/>}/>
                            <Route path="/login" render={withSuspense(Login)}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {InitializeApp}))(App);
