import React, {Component} from "react";

//子组件
class ChildCpn extends Component{
  /*
  //子类的默认传递方式就是按照如下实现的，所以可以省略
  constructor(props) {
    super(props);
  }*/
  render() {
    const {name, age, height} = this.props;
    return(
      <h2>子组件展示的数据：{name + "" + age + "" + height}</h2>
    )
  }
}
//父组件
export default class App extends Component{
  render() {
    return(
      <div>
        <ChildCpn name="why" age="18" height="1.88"/>
        <ChildCpn name="kobe" age="25" height="1.98"/>
      </div>
    )
  }
}