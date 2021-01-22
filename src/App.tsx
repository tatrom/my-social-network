import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StateType, StoreType} from "./Redux/state";


type PostType = {
    id: number
    message: string
    likes: number
}

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string

}

type UserType = {
    id: number
    name: string
    date: number
}
type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

type ProfilePageType = {
    posts: Array<PostType>
    newText: string
}

type UsersType = {
    users: Array<UserType>
}


type AppPropsType = {
  store:StoreType;
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar users={state.Users.users}/>
            <div className={"App_content"}>
                <Route path="/profile" render={() => <Profile posts={state.ProfilePage.posts} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)} newPostText={state.ProfilePage.newText}/>}/>
                <Route path="/dialogs"render={() => <Dialogs dialogs={state.DialogPage.dialogs} messages={state.DialogPage.messages}/>}/>
                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
