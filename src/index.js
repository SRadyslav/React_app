import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';
import { BrowserRouter } from "react-router-dom";


let renderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} dispatch = {store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

