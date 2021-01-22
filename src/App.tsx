import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType, StoreType} from "./Redux/state";


// type PostType = {
//     id: number
//     message: string
//     likes: number
// }
//
// type DialogsType = {
//     id: number
//     name: string
// }
//
// type MessagesType = {
//     id: number
//     message: string
//
// }
//
// type UserType = {
//     id: number
//     name: string
//     date: number
// }

type AppPropsType = {
    store: StoreType;
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    return (

        <div className="App">
            <Header/>
            <Navbar users={state.Users.users}/>
            <div className={"App_content"}>
                <Route path="/profile" render={() => <Profile posts={state.ProfilePage.posts}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                                                              newPostText={state.ProfilePage.newText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogPage={state.DialogPage}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
                {/*<Route render={() => <Profile posts={state.ProfilePage.posts}*/}
                {/*                              dispatch={props.store.dispatch.bind(props.store)}*/}
                {/*                              newPostText={state.ProfilePage.newText}/>}/>*/}
            </div>
        </div>

    );
}

export default App;
