import React from 'react';
// import {connect} from "../utils/connect";
import {connect} from 'react-redux';
import {decAction, subAction} from "../store/actionCreators";

function About(props)  {

    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {props.counter}</h2>
        <button onClick={event => props.decrement()}>-1</button>
        <button onClick={event => props.subNum(5)}>-5</button>

        <h1>Banners</h1>
        <ul>
          {
            props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>

        <h1>Recommend</h1>
        <ul>
          {
            props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
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
