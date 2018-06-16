import React from 'react';
import ReactDOM from 'react-dom';

import {
    createStore,
    applyMiddleware
} from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';


window.onload = () => {

    const middleware = [thunk];

    if (process.env.NODE_ENV !== 'production') {
         middleware.push(createLogger());
    }

    let store = createStore(reducer, applyMiddleware(...middleware));
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
    registerServiceWorker();

};