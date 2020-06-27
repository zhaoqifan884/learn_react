import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  render()
  {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={event => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    //setState是从component中继承的
    this.setState({
     counter: this.state.counter + 1
    });
    console.log(this.state.counter)
  }
}

export default App;