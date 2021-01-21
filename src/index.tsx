import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state, StateType, subscribe, updateNewPostText} from './Redux/state'
import ReactDOM from "react-dom";
import React from "react";

function EntireTreeRender() {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
EntireTreeRender()
subscribe(EntireTreeRender);
