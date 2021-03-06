import React, {PureComponent} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import routes from "./router";

import './App.css'

// import className from 'classnames'

class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //
  //   // this.state = {
  //   //   links: [
  //   //     {to: "/", title: "首页"},
  //   //     {to: "/about", title: "关于"},
  //   //     {to: "/profile", title: "我的"}
  //   //   ],
  //   //   currentIndex: 0
  //   // }
  // }
  render() {
    const id = 'abc';
    const info = {name: "Bill", age: 18, height: 1.88};
    return (
      <div>

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
        {/*//动态id*/}
          <NavLink to={`/detail/${id}`} activeClassName={'link-active'}>详情</NavLink>
        {/*//query的方式*/}
          <NavLink to={`/detail2?name=Bill&age=18`} activeClassName={'link-active'}>详情2</NavLink>
          {/*state方式： 传递复杂的数据*/}
          <NavLink to={{
            pathname: '/detail3',
            search: '?name=abc',
            state: info
          }}
                   activeClassName={'link-active'}>详情3</NavLink>
          <button onClick={event => this.jumpToProduct()}>商品</button>

          {/*//exact: 精准的匹配*/}
          {/*switch 组件 排他的作用，每个组件只能匹配一次*/}
          {/*<Switch>*/}
          {/*  <Route exact path={'/'} component={Home}/>*/}
          {/*  <Route path={'/about'} component={About}/>*/}
          {/*  <Route exact path={'/profile'} component={Profile}/>*/}
          {/*  /!*<Route path={'/:id'} component={User}/>*!/*/}
          {/*  <Route path={'/user'} component={User}/>*/}
          {/*  <Route path={'/login'} component={Login}/>*/}
          {/*  <Route path={'/product'} component={Product}/>*/}
          {/*  <Route path={'/detail/:id'} component={Detail}/>*/}
          {/*  <Route path={'/detail2'} component={Detail2}/>*/}
          {/*  <Route path={'/detail3'} component={Detail3}/>*/}
          {/*  <Route component={NoMatch}/>*/}
          {/*</Switch>*/}
        {/*renderRoutes 和 Switch 作用一样，但是需要创建路由文件，由renderRoutes内部帮我们跳转*/}
        {renderRoutes(routes)}

      </div>
    );
  }

  jumpToProduct() {
    //这里报错的原因是因为app组件不是路由创建出来的
    //怎么解决这个问题     通过使用高阶组件给APP增加属性   当使用withRouter高阶组件时，必须要将该包裹的组件放置在BrowserRouter中
    this.props.history.push("/product");
  }
}

/**
 * withRouter这个高阶组件实际上是在react-router中定义的，但是在react-router-dom中导出的，看源码即可知道
 * 为什么withRouter中会有history等一些属性？
 * 看源码可知，是定义在context容器中传过来的
 */
export default withRouter(App);