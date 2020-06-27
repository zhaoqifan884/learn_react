import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello world",
      name: "Bill Chiu"
    }
  }
  render()
  {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={event => this.changeTest()}>改变文本</button>
      </div>
    );
  }

  changeTest() {
    this.setState({
      message: "你好啊，李银河"
    })
  }
}

export default App;