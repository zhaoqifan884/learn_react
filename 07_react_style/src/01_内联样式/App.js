import React, {PureComponent} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "yellow"
    }
  }
  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: "underline"
    }
    return (
      <div>
        <h2 style={{fontSize: "50px", color: "red"}}>我是标题</h2>
        <p style={pStyle}>我是一段文字描述</p>
      </div>
    );
  }
}


export default App;