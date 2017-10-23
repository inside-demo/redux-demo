import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './app.jsx'

const store = createStore(function (state = {user: 'Unknown User'}, action) {
  switch (action.type) {
      case 'SET_NAME':
        return { ...state, user: action.payload }

      default:
        return state;
    }
});

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('app')
);


