import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

import { combineReducers } from 'redux';

/**
 * 将多个reducer进行合并    自己封装的有一个问题，当state并未做任何修改时，没有必要返回一个新的对象，看counterReducer源码即可知道
 * @param state 传递一个空对象，相当于state中的counterInfo，homeInfo为空对象
 * @param action
 * @returns {{counterInfo: ({counter: *}|{counter: number}), homeInfo: ({recommends: [], banners: ([]|*[])}|{recommends: ([]|*[]), banners: []}|{recommends: [], banners: []})}}
 */
/*function reducer(state = {}, action) {
  return {
    //key: value--->执行返回的函数
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}*/


// reducer应该是一个什么类型? function
/**
 * 利用函数combineReducers合并
 * @type {Reducer<CombinedState<unknown>>}
 */
const reducer = combineReducers({
  //key: value  ------> 将函数传过来即可，并不需要执行
  counterInfo: counterReducer,
  homeInfo: homeReducer
});

export default reducer;
