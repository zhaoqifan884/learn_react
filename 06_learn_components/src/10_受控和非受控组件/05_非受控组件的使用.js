import React, {PureComponent, createRef} from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.usernameRef = createRef();
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="username">
                        用户：
                        <input type="text" id={'username'} ref={this.usernameRef}/>
                    </label>
                    <input type="submit" value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        //取消默认行为
        event.preventDefault();
        //通过直接获取dom操作，react中不推荐
        console.log(this.usernameRef.current.value)
    }

}



export default App;