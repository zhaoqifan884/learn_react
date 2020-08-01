import React, {PureComponent} from 'react';

import Home from "./pages/Home";
import About from "./pages/About";

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