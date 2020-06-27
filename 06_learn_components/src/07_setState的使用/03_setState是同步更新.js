import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }
  render()
  {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={event => this.changeTest()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  //setState同步的情况：
  //方式二：在componentDidMount生命周期函数中执行原始dom操作
  //若不是在原始dom操作中执行，拿到的数据是Hello World
  componentDidMount() {
    document.getElementById("btn").addEventListener("click", (e) => {
      // console.log("btn被点击了")
      this.setState({
        message: "你好啊， 李银河"
      });
      console.log(this.state.message)
    })
  }

  changeTest() {
    //在setTimeout和原生dom中，setState是同步的
    //setState同步的情况：
    //情况1：setState放在定时器中执行
    setTimeout(() => {
      this.setState({
        message: "你好啊， 李银河"
      });
      console.log(this.state.message)
    },0)
  }
}

export default App;