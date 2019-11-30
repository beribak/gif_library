// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger'; 
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import './assets/stylesheets/application.scss';
import inputValueReducer from './reducers/input_value_reducer';

// State and reducers
const initialState = {

}

const reducers = combineReducers({
  inputValue: inputValueReducer
});

const middlewares = applyMiddleware(reduxPromise, logger); 
const store = createStore(reducers, initialState, middlewares);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
