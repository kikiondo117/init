import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './shared/routes/AppRouter.routes'
import * as serviceWorker from './serviceWorker';
// ! Redux
import { Provider } from 'react-redux'
import configureStore from './shared/redux/configure_store.store'

const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
