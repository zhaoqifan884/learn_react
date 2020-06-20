// import React, {Component} from "react";
import React from "react";
//定义类组件
/*
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: "你好啊，李银河"
    }
  }
  render() {
    return(
      <div>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}*/


/**
 * 函数式组件特点：：
 * 1。 没有this对象
 * 2.没有内部的状态（state）
 * 3.没有生命周期
 * @returns {*}
 * @constructor
 */
//定义函数组件
export default function App() {
  return(
    <div>我是函数组件</div>
  )
}
