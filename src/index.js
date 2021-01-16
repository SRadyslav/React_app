import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from './StoreContext';


let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store} >
                    <App /*state={state} dispatch = {store.dispatch.bind(store)} store={store}*/ />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

