import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import manageAccounts from './reducers/manageAccounts';

const store = createStore( manageAccounts, applyMiddleware(thunk))


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
