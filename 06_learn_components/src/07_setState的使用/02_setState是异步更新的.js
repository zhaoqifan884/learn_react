import React, {Component} from 'react';

function Home(props) {
  return <h2>{props.message}</h2>
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.message}</h2>
        <button onClick={event => this.changeTest()}>改变文本</button>
        <Home message={this.state.message}/>
      </div>
    );
  }

  //获取异步更新后的数据
  //方式2：当执行render函数后，执行componentDidUpdate生命周期函数(比方法一先执行)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.message)
  }

  changeTest() {
    /*
    //setState是异步更新的
    //如果setState是同步的，还没有执行render,那么state和props不能同步
    this.setState({
      message: "你好啊，李银河"
    });
    console.log(this.state.message)  //hello world*/

    //在组件生命周期或react合成事件中，setState是异步的
    //获取异步更新后的数据
    //方法1：setState(更新的state,回调函数)
    this.setState({
      message: "你好啊，李银河"
    }, () => {
      console.log(this.state.message);
    })
  }
}

export default App;