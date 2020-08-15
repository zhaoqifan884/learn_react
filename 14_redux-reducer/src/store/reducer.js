import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

// import { combineReducers } from 'redux';

/**
 *
 * @param state 传递一个空对象，相当于state中的counterInfo，homeInfo为空对象
 * @param action
 * @returns {{counterInfo: ({counter: *}|{counter: number}), homeInfo: ({recommends: [], banners: ([]|*[])}|{recommends: ([]|*[]), banners: []}|{recommends: [], banners: []})}}
 */
function reducer(state = {}, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action)
  }
}


//reducer应该是一个什么类型? function
// const reducer = combineReducers({
//   counterInfo: counterReducer,
//   homeInfo: homeReducer
// });

export default reducer;
