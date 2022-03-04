import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

//store.subscribe(()=> console.logstore.getState())

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}> 
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


