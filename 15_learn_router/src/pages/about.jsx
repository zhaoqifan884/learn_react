import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


export function AboutHisotry(props) {
  return <h2>企业成立于2000年, 拥有悠久的历史文化</h2>
}

export function AboutCulture(props) {
  return <h2>创新/发展/共赢</h2>
}

export function AboutContact(props) {
  return <h2>联系电话: 020-68888888</h2>
}

export function AboutJoin(props) {
  return <h2>投递简历到aaaa@123.com</h2>
}

export default class About extends PureComponent {
  render() {
    //当this.props中含有route时，是{renderRoutes(routes)}帮我们创建的，如果执行switch是不会有route的
    console.log(this.props.route);
    //matchRoute（routes配置，请求路径）函数  返回匹配到的所有分支
    // const branch = matchRoutes(this.props.route.routes, "/about");
    // console.log(branch);

    return (
      <div>
        <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
        <NavLink exact to="/about/culture" activeClassName="about-active">企业文化</NavLink>
        <NavLink exact to="/about/contact" activeClassName="about-active">联系我们</NavLink>
        <button onClick={e => this.jumpToJoin()}>加入我们</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHisotry}/>
          <Route path="/about/culture" component={AboutCulture}/>
          <Route path="/about/contact" component={AboutContact}/>
          <Route path="/about/join" component={AboutJoin}/>
        </Switch> */}

        {/*renderRoutes(需要配置的路由)*/}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }

  jumpToJoin() {
    // console.log(this.props.history);
    // console.log(this.props.location);
    // console.log(this.props.match);
    this.props.history.push("/about/join");
  }
}
