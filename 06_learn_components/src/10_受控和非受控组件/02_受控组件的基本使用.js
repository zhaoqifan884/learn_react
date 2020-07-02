import React, {PureComponent} from 'react';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            username: ""
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
                               value={this.state.username}/>
                    </label>
                    <input type="submit" value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        //取消默认行为
        event.preventDefault();
        console.log(this.state.username)
    }

    handleChange(event) {
        // console.log(event.target.value)  打印输入框的输入数据
        this.setState({
            username: event.target.value
        })
    }
}



export default App;