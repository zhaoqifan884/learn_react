import React, {PureComponent} from 'react';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            valid: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="username">
                        用户：
                        {/*单向数据流： 输入框的数据先保存到state中，然后再由value指向输入框，并显示*/}
                        {/*受控组件*/}
                        <input type="text"
                               id={'username'}
                               onChange={event => this.handleChange(event)}
                               value={this.state.username}
                               name={'username'}/>
                    </label>
                    <br/>
                    <label htmlFor="password">
                        密码：
                        {/*单向数据流： 输入框的数据先保存到state中，然后再由value指向输入框，并显示*/}
                        {/*受控组件*/}
                        <input type="text"
                               id={'password'}
                               onChange={event => this.handleChange(event)}
                               value={this.state.password}
                               name={'password'}/>
                    </label>
                    <br/>
                    <label htmlFor="username">
                        验证：
                        {/*单向数据流： 输入框的数据先保存到state中，然后再由value指向输入框，并显示*/}
                        {/*受控组件*/}
                        <input type="text"
                               id={'valid'}
                               onChange={event => this.handleChange(event)}
                               value={this.state.valid}
                               name={'valid'}/>
                    </label>
                    <br/>
                    <input type="submit" value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        //取消默认行为
        event.preventDefault();
        // console.log(this.state.username)
    }

    handleChange(event) {
        // console.log(event.target.value)  打印输入框的输入数据
        // console.log(event.target.name);
        this.setState({
            //[event.target.name]: 计算属性名
            [event.target.name]: event.target.value
        })
    }
}



export default App;