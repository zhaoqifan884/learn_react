import React, {PureComponent} from 'react';

import store from "../store";
import {addAction} from "../store/actionCreators";

class Home_Redux extends PureComponent {
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
        <h1>Home</h1>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={event => this.increment()}>+1</button>
        <button onClick={event => this.addNum(5)}>+5</button>
      </div>
    );
  }

  increment() {
    store.dispatch(addAction(1))
  }

  addNum(num) {
    store.dispatch(addAction(num))
  }
}

export default Home_Redux;