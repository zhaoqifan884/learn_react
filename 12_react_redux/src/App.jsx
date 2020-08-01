import React, {PureComponent} from 'react';

// import Home from "./pages/Home";
import Home from "./pages/ReHome";
// import About from "./pages/About";
import About from "./pages/ReAbout";
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