import './index.css';
import * as serviceWorker from './serviceWorker';
import store  from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let _callSubscriber = (_state) => {
    ReactDOM.render(
    <React.StrictMode><BrowserRouter><App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/> </BrowserRouter></React.StrictMode>,document.getElementById('root'));
}


_callSubscriber(store.getState());   

store.subscribe(_callSubscriber);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
