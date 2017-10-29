import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/app.jsx'
import rootReducer from './reducers'

ReactDOM.render(
  <Provider store={createStore(rootReducer, {})}>
  	<App />
  </Provider>,
  document.getElementById('app')
);


