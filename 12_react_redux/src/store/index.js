import {createStore, applyMiddleware, compose} from 'redux';

import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga'

import reducer from './reducer.js';
import saga from "./saga";

//获取composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

//2.创建createSagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();
//应用中间件
//1.引入thunk中间件（上面）
const storeEnhancer = applyMiddleware(thunk, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));
//跑起来之后才能对应用进行拦截
//.run(生成器函数)
sagaMiddleware.run(saga);

export default store;
