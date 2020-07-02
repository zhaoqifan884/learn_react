import React, {PureComponent} from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fruits: "orange"
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <select name="fruits"
                            onChange={event => this.handleChange(event)} value={this.state.fruits}>
                        <option value={'apple'}>苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>
                    <input type="submit" value={'提交'}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.fruits)
    }

    handleChange(event) {
        this.setState({
            fruits: event.target.value
        })
    }
}

export default App;