import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UsersContainer";
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from "./Components/Login/Login";


function App() {
    return (
        <HashRouter>
            <div className="App">

                <HeaderContainer/>
                <Navbar/>
                <div className={"App_content"}>
                    <Switch>
                        <Route path={"/"} exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/news"/>
                        <Route path="/music"/>
                        <Route path="/settings"/>
                        <Route path="/users" render={() => <UserContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
