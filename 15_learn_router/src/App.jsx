import React, {PureComponent} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";

import './App.css'
import User from "./pages/user";
import NoMatch from "./pages/noMatch";
import Login from "./pages/login";

// import className from 'classnames'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {to: "/", title: "首页"},
        {to: "/about", title: "关于"},
        {to: "/profile", title: "我的"}
      ],
      currentIndex: 0
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          {/*Link 方式*/}
          {/*<Link to={'/'}>首页</Link>*/}
          {/*<Link to={'/about'}>关于</Link>*/}
          {/*<Link to={'/profile'}>我的</Link>*/}

          {/*NavLink 方式*/}
          {/*内联样式*/}
          {/*<NavLink exact to={'/'} activeStyle={{color: "red"}}>首页</NavLink>*/}
          {/*<NavLink to={'/about'} activeStyle={{color: "red"}}>关于</NavLink>*/}
          {/*<NavLink to={'/profile'} activeStyle={{color: "red"}}>我的</NavLink>*/}

          {/*引入自己写的css    classname是自己生成的 */}
          {/*<NavLink exact to={'/'}>首页</NavLink>*/}
          {/*<NavLink to={'/about'}>关于</NavLink>*/}
          {/*<NavLink to={'/profile'}>我的</NavLink>*/}

          {/*引入自己写的css    classname自定义*/}
          {/*NavLink  和  Link 只有点击才跳转   相当于一个a标签*/}
          {/*<Redirect >  重定向  不用点击，立即跳转*/}
          <NavLink exact to={'/'} activeClassName={'link-active'}>首页</NavLink>
          <NavLink to={'/about'} activeClassName={'link-active'}>关于</NavLink>
          <NavLink to={'/profile'} activeClassName={'link-active'}>我的</NavLink>
          <NavLink to={'/user'} activeClassName={'link-active'}>用户</NavLink>

          {/*//exact: 精准的匹配*/}
          {/*switch 组件 排他的作用，每个组件只能匹配一次*/}
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/about'} component={About}/>
            <Route exact path={'/profile'} component={Profile}/>
            {/*<Route path={'/:id'} component={User}/>*/}
            <Route path={'/user'} component={User}/>
            <Route path={'/login'} component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;