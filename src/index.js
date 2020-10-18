import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
  { id: 1, message: 'Hi this my first phost', likesCount: 11, dislike: 12 },
  { id: 2, message: 'Ok', likesCount: 1, dislike: 3 },
  { id: 3, message: 'Five million dolars!', likesCount: 2, dislike: 3 },
]; 

let dialogs = [
  { id: 1, name: 'Roma' },
  { id: 2, name: 'Nikita' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Ignat' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How much did you earn?' },
  { id: 3, message: 'Five million dolars!' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
