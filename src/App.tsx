import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UserContainer} from "./Components/Users/UsersContainer";


function App() {
    return (
        <HashRouter>
            <div className="App">

                <Header/>
                <Navbar/>
                <div className={"App_content"}>
                    <Switch>
                        <Route path={"/"} exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/news"/>
                        <Route path="/music"/>
                        <Route path="/settings"/>
                        <Route path="/users" render={() => <UserContainer/>}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
