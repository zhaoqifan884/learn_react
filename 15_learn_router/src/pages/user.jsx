import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'

class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }
  }
  render() {
    return this.state.isLogin ? (
      <div>
        User
        <h2>用户名：Bill Chou</h2>
      </div>
    //  <Redirect >  重定向  不用点击，立即跳转
    //   NavLink  和  Link 只有点击才跳转   相当于一个a标签
    ): <Redirect to={'/login/'}/>
  }
}

export default User;