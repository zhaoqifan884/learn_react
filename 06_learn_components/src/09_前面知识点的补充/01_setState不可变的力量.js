import React, {PureComponent} from 'react';

class App extends PureComponent
{
  constructor(props) {
    super(props);

    //引用类型
    this.state = {
      friends: [
        { name: "Ada", age: 20 },
        { name: "lion", age: 25 },
        { name: "Joe", age: 22 }
      ]
    }
  }

  /*shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.friends !== this.state.friends
  }*/

  render()
  {
    return (
      <div>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return(
                <li key={index}>
                  姓名：{item.name}
                  年龄：{item.age}
                  <button onClick={event => this.incrementAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={event => this.insertData()}>添加姓名</button>
      </div>
    );
  }

  incrementAge(index) {
    const newFreiends = [...this.state.friends];
    newFreiends[index].age += 1;
    this.setState({
      friends: newFreiends
    })
  }

  insertData() {
    const newFreiends = [...this.state.friends];
    newFreiends.push({name: "Chris", age: 50});
    this.setState({
      //浅层比较   比较两个不同内存地址的数组才会渲染
      friends: newFreiends
    })
  }
}

export default App;