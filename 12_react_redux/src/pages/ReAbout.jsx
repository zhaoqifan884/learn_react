import React from 'react';
import {connect} from "../utils/connect";

import {decAction, subAction} from "../store/actionCreators";

function About(props)  {

    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {props.counter}</h2>
        <button onClick={event => props.decrement()}>-1</button>
        <button onClick={event => props.subNum(5)}>-5</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction())
    },
    subNum: function (num) {
      dispatch(subAction(num))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
