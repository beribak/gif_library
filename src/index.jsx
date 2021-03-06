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
// State and reducers
import inputValueReducer from './reducers/input_value_reducer';
import gifListReducer from './reducers/gif_list_reducer';
import trendingGifsReducer from './reducers/trending_gifs_reducer';


const initialState = {
	
}

const reducers = combineReducers({
  inputValue: inputValueReducer,
  gifList: gifListReducer,
  trendingGifs: trendingGifsReducer
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
