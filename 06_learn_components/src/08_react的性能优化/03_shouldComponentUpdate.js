import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "hello world"
    }
  }
  render() {
    console.log("App render被调用");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={event => this.increment()}>+1</button>
        <button onClick={event => this.changeText()}>改变文本</button>
      </div>
    );
  }

  /**
   * shouldComponentUpdate:  生命周期函数   是否需要再次渲染render
   * 当之前的数据和最新的数据对比，不一样时，在渲染render,相同时则不需要渲染
   * @param nextProps   最新的props
   * @param nextState   最新的state
   * @param nextContext  最新的context
   * @returns {boolean}   true: 需要渲染render   false: 不需要渲染render
   */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.counter !== nextState.counter;

  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  changeText() {
    this.setState({
      message: "Bill Chou"
    })
  }
}

export default App;