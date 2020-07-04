import React, {PureComponent} from 'react';
import ReactDom from 'react-dom'

/**
 * 需求： 将Title渲染到中间
 */

class Modal extends PureComponent{
  render() {
    return ReactDom.createPortal(
      this.props.children, document.getElementById("modal")
    )
  }
}

class Home extends PureComponent{
  render() {
    return(
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    )
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;