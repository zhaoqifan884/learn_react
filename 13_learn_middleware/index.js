import store from './store/index.js';

import {
  addAction, subAction
} from './store/actionCreators.js';

// 1.基本做法
// console.log("dispatch前---dispatching action:", addAction(10));
// store.dispatch(addAction(10));
// console.log("dispatch后---new state:", store.getState());


// console.log("dispatch前---dispatching action:", addAction(15));
// store.dispatch(addAction(15));
// console.log("dispatch后---new state:", store.getState());

// 2.封装一个函数
// function dispatchAndLogging(action) {
//   console.log("dispatch前---dispatching action:", action);
//   store.dispatch(action);
//   console.log("dispatch后---new state:", store.getState());
// }

// dispatchAndLogging(addAction(10));
// dispatchAndLogging(addAction(5));

// 3.函数的基础之上进行优化: 修改原有的dispatch
// hack技术: monkeyingpatch
// const next = store.dispatch;
// function dispatchAndLogging(action) {
//   console.log("dispatch前---dispatching action:", action);
//   next(action);
//   console.log("dispatch后---new state:", store.getState());
// }
// store.dispatch = dispatchAndLogging;
//
// store.dispatch(addAction(10));
// store.dispatch(addAction(5));

// 4.1将之前的操作进行封装
// 封装patchLogging的代码
// function patchLogging(store) {
//   const next = store.dispatch;
//   function dispatchAndLogging(action) {
//     console.log("dispatch前---dispatching action:", action);
//     next(action);
//     console.log("dispatch后---new state:", store.getState());
//   }
//   store.dispatch = dispatchAndLogging;
//
// }
// patchLogging(store);
// store.dispatch(addAction(10));
// store.dispatch(addAction(5));

//4.2 封装patchThunk的功能
// 封装patchLogging的代码
// function patchLogging(store) {
//   const next = store.dispatch;
//   function dispatchAndLogging(action) {
//     console.log("dispatch前---dispatching action:", action);
//     next(action);
//     console.log("dispatch后---new state:", store.getState());
//   }
//   store.dispatch = dispatchAndLogging;
// }
//
// //封装patchThunk的功能
// function patchThunk(store) {
//   const next = store.dispatch;
//
//   function dispatchAndThunk(action) {
//     //Thunk不仅能传递一个对象，也能传递一个函数
//     if (typeof action === "function") {
//       //函数
//       //ps: 函数()： 执行函数
//       action(next, store.getState)
//     } else {
//       //对象
//       next(action);
//     }
//   }
//   store.dispatch = dispatchAndThunk;
// }
// patchLogging(store);
// patchThunk(store);
// //传方法
// // store.dispatch(addAction(10));
// // store.dispatch(addAction(5));
//
// //调取函数时：
// function foo(dispatch, getState) {
//   dispatch(subAction(10))
// }
// store.dispatch(foo);

// 5.封装applyMiddleware      （真实开发）
function applyMiddlewares(...middlewares) {
  //前拷贝   把之前的变量展开赋值给newMiddleware，怕对newMiddleware做修改
  const newMiddleware = [...middlewares];
  middlewares.forEach(middleware => {
    //middleware 实际就是applyMiddlewares的两个参数
    store.dispatch = middleware(store);
  })
}
applyMiddlewares(patchLogging, patchThunk);

// 封装patchLogging的代码
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前---dispatching action:", action);
    next(action);
    console.log("dispatch后---new state:", store.getState());
  }
  return dispatchAndLogging;
}

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      //函数
      action(next, store.getState)
    } else {
      next(action)
    }
  }
  return dispatchAndThunk;
}

patchLogging(store);
patchThunk(store);



