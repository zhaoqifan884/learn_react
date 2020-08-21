import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT
} from './constants.js';

const defaultState = {
  counter: 0
};

/**
 *
 * @param state : 前一次计算返回的值
 * @param action ： 本次修改的值
 * @returns {{counter: *}|{counter: number}}
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
    default:
      return state;
  }
}

export default reducer;
