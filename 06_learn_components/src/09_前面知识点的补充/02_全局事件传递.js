import React, {PureComponent} from 'react';
import {EventEmitter} from 'events'
//事件总线 ：event bus
const eventBus = new EventEmitter()

class Home extends PureComponent{

  //添加监听事件
  componentDidMount() {
    eventBus.addListener("sayHello", args => {
      console.log(args)
    })
  }

  //取消监听事件
  componentWillUnmount() {
    eventBus.removeListener("sayHello", args => {
      console.log(args)
    })
  }

  render() {
    return(
      <div>
        Home

      </div>
    )
  }
}

class Profile extends PureComponent{
  render() {
    return(
      <div>
        Profile
        <button onClick={event => this.emitEvent()}>点击了Profile按钮</button>
      </div>
    )
  }
  emitEvent() {
    //兄弟组件发送事件
    eventBus.emit("sayHello",123)
  }

}

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    );
  }
}


export default App;