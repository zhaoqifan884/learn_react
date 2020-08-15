import React, {PureComponent} from 'react';

// import Home_Redux from "./pages/Home_Redux";
// import Home from "./pages/ReHome2_redux-thunk的使用";
// import About from "./pages/About";
import Home from "./pages/ReHome3_redux-saga的使用";
import About from "./pages/ReAbout1";
class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <About/>
      </div>
    );
  }
}


export default App;