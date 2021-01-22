import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './Redux/state'
import ReactDOM from "react-dom";
import React from "react";

function EntireTreeRender() {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
EntireTreeRender()
store.subscribe(EntireTreeRender);
