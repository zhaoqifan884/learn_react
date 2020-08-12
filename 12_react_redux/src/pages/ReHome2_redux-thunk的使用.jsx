import React, {PureComponent} from 'react';
// import {connect} from "../utils/connect";
import {connect} from 'react-redux'
// import axios from 'axios'

import {incAction, addAction, getHomeMultidataAction} from "../store/actionCreators";

class Home extends PureComponent {

  componentDidMount() {
   this.props.getHomeMultidata();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数： {this.props.counter}</h2>
        <button onClick={event => this.props.increment()}>+1</button>
        <button onClick={event => this.props.addNum(5)}>+5</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction())
  },
  addNum(num) {
    dispatch(addAction(num))
  },
  getHomeMultidata() {
    //在没有调用中间件之前，dispatch(对象)，调用之后为：dispatch(函数)
    dispatch(getHomeMultidataAction)
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)