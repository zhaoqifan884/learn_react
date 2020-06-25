import React, {Component} from "react";
import PropType from "prop-types"

function ChildCpn(props) {
  const {name, age, height} = props;
  const {names} = props;
  return(
    <div>
      <h3>{name + age + height}</h3>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

//属性验证
ChildCpn.propTypes = {
  name: PropType.string.isRequired,
  age: PropType.number,
  height: PropType.number,
  names: PropType.array
};

//传递默认值
ChildCpn.defaultProps = {
  name: "why",
  age: 30,
  height: 1.98,
  names: ["aaa","bbb"]
};

export default class App extends Component{
  render() {
    return(
      <div>
        <ChildCpn name="why" age={18} height={1.88} names={["jdjsd","dsd","iiy"]}/>
        <ChildCpn name="kobe" age={19} height={1.99} names={["155","54545","dsd"]}/>
        <ChildCpn/>
        {/*如果不传name时会报NAN错误
            因为： underfind + num = NAN   jsx传递NAN时会报错*/}
        {/*<ChildCpn age={19} height={1.99} names={["155","54545","dsd"]}/>*/}
      </div>
    )
  }
}