import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={event => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    /*
    //虽然这里调用了三次，但是setState内部只执行一次，所以setState本身被合并
    //若state为对象时，则无累加操作
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });*/

    //setState合并被累加（不让setState被合并）
    //若state为函数时，则有合并累加操作
    this.setState((prevState, props) => {
      return {
        //prevState.counter： 上一次拿到的结果
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        //prevState.counter： 上一次拿到的结果
        counter: prevState.counter + 1
      }
    });
    this.setState((prevState, props) => {
      return {
        //prevState.counter： 上一次拿到的结果
        counter: prevState.counter + 1
      }
    });
  }
}

export default App;