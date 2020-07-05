import React, {PureComponent} from 'react';
import Home from "../home";
import Profile from "../profile";

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home/>
        <Profile/>
      </div>
    );
  }
}

export default App;