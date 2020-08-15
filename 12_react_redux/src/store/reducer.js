import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_RECOMMEND,
  CHANGE_BANNER
} from './constants.js';

const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
};

/**
 *
 * @param state : 前一次计算返回的值
 * @param action ： 本次修改的值
 * @returns {{counter: *}|{counter: number}}
 *
 * 为啥叫reducer：
 *      因为类似于数组的reducer函数
 *      (preValue, item) => {}  => reducer   回调函数
 *      0 ： 默认值
 *      eg: ["abc", "aaa"].reduce((preValue, item) => {
 *
 *      }, 0)
 */
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_BANNER:
      return {...state, banners: action.banners};
    case CHANGE_RECOMMEND:
      return {...state, recommends: action.recommend};
    default:
      return state;
  }
}

export default reducer;
