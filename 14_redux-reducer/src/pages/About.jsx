import React, {PureComponent} from 'react';

import store from "../store";
import {subAction} from "../store/actionCreators";

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter
    }
  }

  //订阅
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  //取消订阅
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={event => this.decrement()}>-1</button>
        <button onClick={event => this.subNum(5)}>-5</button>
      </div>
    );
  }
  decrement() {
    store.dispatch(subAction(1))
  }
  subNum(num) {
    store.dispatch(subAction(num))
  }
}

export default About;