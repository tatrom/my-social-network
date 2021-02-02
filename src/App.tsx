import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UserContainer} from "./Components/Users/UsersContainer";




function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"App_content"}>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                <Route path="/users" render={() => <UserContainer />} />
            </div>
        </div>

    );
}

export default App;
