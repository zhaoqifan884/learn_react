import React, {PureComponent} from 'react';

function withRenderTime(WrapperComponent) {
  return class extends PureComponent{
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }

    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      //组件.name   获取组件的名字
      console.log(`${WrapperComponent.name}渲染时间：${interval}`);
    }

    render() {
      return <WrapperComponent {...this.props}/>
    }
  }
}

class Home extends PureComponent{

  render() {
    return <h2>Home</h2>
  }
}
class About extends PureComponent{
  render() {
    return <h2>About</h2>
  }
}

const TimeHome = withRenderTime(Home);
const TimeAbout = withRenderTime(About)

class App extends PureComponent {
  render()
  {
    return (
      <div>
        <TimeHome/>
        <TimeAbout/>
      </div>
    );
  }
}


export default App;