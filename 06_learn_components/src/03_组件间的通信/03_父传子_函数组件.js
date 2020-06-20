import React, {Component} from "react";

function ChildCpn(props) {
  const {name, age, height} = props;
  return(
    <div>
      <h3>{name + age + height}</h3>
    </div>
  )
}
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