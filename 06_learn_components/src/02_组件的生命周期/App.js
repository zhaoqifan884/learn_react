import React, {Component} from "react";

class Cpn extends Component{
  render() {
    return <h2>我是cpn组件</h2>
  }

  /**
   * 销毁方法
   */
  componentWillUnmount() {
    console.log("调用了cpn组件的componentWillUnmount方法   销毁方法")
  }
}

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isShow: true
    };
//在类里定义的叫方法，单独定义的叫函数  创建构造器
    console.log("执行了组件的constructor方法   创建构造器");
  }
  render() {
    console.log("执行了组件的render方法");
    return(
      <div>
        我是APP组件
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr/>
        <button onClick={e => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>

    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  /**
   * 挂载方法
   */
  componentDidMount() {
    console.log("执行了组件的componentDidMount方法  挂载方法")
  }

  /**
   * 修改方法
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行了组件的componentDidUpdate方法   修改方法")
  }
}