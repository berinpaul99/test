import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Reducer} from './Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { applyMiddleware, createStore, combineReducers } from 'redux';


const myStore = createStore(combineReducers({Reducer, form: reduxFormReducer}), applyMiddleware(thunk))

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
