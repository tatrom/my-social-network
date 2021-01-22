import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/state'
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";

function EntireTreeRender() {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
EntireTreeRender()
store.subscribe(EntireTreeRender);
