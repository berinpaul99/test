import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Reducer} from './Reducer';
import { Provider,  } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({Reducer, form: formReducer});

const myStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={myStore}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));