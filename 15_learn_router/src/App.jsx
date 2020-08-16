import React, {PureComponent} from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";

class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to={'/home'}>首页</Link>
          <Link to={'/about'}>关于</Link>
          <Link to={'/profile'}>我的</Link>
          {/*//exact: 精准的匹配*/}
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/home'} component={Home}/>
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/profile'} component={Profile}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;