import React, {PureComponent, Fragment} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      friends: [
        {name: "why", age: 22},
        {name: "Joe", age: 30},
        {name: "Tim", age: 60}
      ]
    }
  }
  render() {
    return (
      //如果不想被div包裹渲染，则可以使用Fragment高阶组件  还可以使用短语法
      <>
      {/*<Fragment>*/}
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={event => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return(
                <Fragment key={index}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                </Fragment>
              )
            })
          }
        </div>
      {/*</Fragment>*/}
      </>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;