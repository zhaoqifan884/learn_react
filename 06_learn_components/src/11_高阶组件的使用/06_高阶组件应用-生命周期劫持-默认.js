import React, {PureComponent} from 'react';

class Home extends PureComponent{
  //即将渲染获取时间
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return <h2>Home</h2>
  }
  //渲染完成获取时间
componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log(`Home渲染时间：${interval}`);
}
}
class About extends PureComponent{
  render() {
    return <h2>About</h2>
  }
}

class App extends PureComponent {
  render()
  {
    return (
      <div>
        <Home/>
        <About/>
      </div>
    );
  }
}


export default App;