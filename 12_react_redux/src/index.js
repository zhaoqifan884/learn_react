import React from 'react';
import ReactDOM from 'react-dom';
// import {StoreContext} from "./utils/context";
import {Provider} from 'react-redux'
import App from './App';
import store from "./store";

/*ReactDOM.render(
  <StoreContext.Provider value={store}>
     <App />
  </StoreContext.Provider>,
  document.getElementById('root')*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

