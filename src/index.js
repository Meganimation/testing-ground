import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

//......................................SHORTCUTS
const rubberedux = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
// dev tools for redux debugging
const store = createStore(rootReducer, rubberedux)


//......................................CONSOLE LOGS

console.log('Initial state:', store.getState())
//console logs the initial state upload loading
store.subscribe(()=> console.log('Updated state', store.getState()))
// console logs whenever the state is updated

//......................................APP RENDERING


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


