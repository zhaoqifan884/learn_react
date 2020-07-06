import React, {PureComponent} from 'react';

//登录页面
class LoginPage extends PureComponent{
  render() {
    return <h2>登录页面</h2>
  }
}

//定义高阶组件
function withAuth(WrapperComponent) {
  return props => {
    const {isLogin} = props;
    if (isLogin) {
      return <WrapperComponent {...props}/>
    } else {
      return <LoginPage/>
    }
  }
}


//购物车页面
class CartPage extends PureComponent{
  render() {
    return <h2>CartPage</h2>
  }
}

const AuthCartPage = withAuth(CartPage);

class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}/>
      </div>
    );
  }
}

export default App;