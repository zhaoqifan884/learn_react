import {createStore, applyMiddleware} from 'redux';

import thunk from "redux-thunk";

import reducer from './reducer.js';

//应用中间件
const storeEnhancer = applyMiddleware(thunk);

const store = createStore(reducer, storeEnhancer);

export default store;
