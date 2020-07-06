import React, {PureComponent} from 'react';

//定义一个高阶组件
function enhanceRegionProps(WrapperComponent) {
  return props => {
    return <WrapperComponent {...props} region={'China'}/>
  }
}

class Home extends PureComponent{
  render() {
    return <h2>Home: {`昵称：${this.props.nikename}  等级：${this.props.level} 区域：${this.props.region}`}</h2>
  }
}
//增强HOME组件
const EnhanceHome = enhanceRegionProps(Home);

class About extends PureComponent{
  render() {
    return <h2>Home: {`昵称：${this.props.nikename}  等级：${this.props.level} 区域：${this.props.region}`}</h2>
  }
}

const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
  render()
  {
    return (
      <div>
        App
        <EnhanceHome nikename={'coderwhy'} level={90}/>
        <EnhanceAbout nikename={'Joe'} level={50}/>
      </div>
    );
  }
}


export default App;