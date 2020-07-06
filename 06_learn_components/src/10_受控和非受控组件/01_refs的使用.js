import React, {PureComponent, createRef} from 'react';

class Counter extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return(
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={event => this.increment()}>+1</button>
            </div>

        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

class App extends PureComponent {

    //使用方式2  3
    constructor(props) {
        super(props);

        this.titleRef = createRef();  //方法2
        this.counterRef = createRef();
        this.titleEl = null;   //方法3
    }

    //通过refs直接操作dom元素

    render() {
        return (
            <div>
                {/*<h2 ref={字符串/函数/对象}>Hello React</h2>*/}
                {/*使用方式1*/}
                <h2 ref={'titleRef'}>Hello React</h2>
                {/*使用方式2   目前react推荐的方式*/}
                <h2 ref={this.titleRef}>Hello React</h2>
                {/*使用方式3*/}
                <h2 ref={arg => this.titleEl = arg}>Hello React</h2>
                <button onClick={event => this.changeTest()}>改变文本</button>
                <hr/>
                <Counter ref={this.counterRef}/>
                <button onClick={event => this.appBtnClick()}>App中的按钮</button>
            </div>
        );
    }

    appBtnClick() {
        // console.log(this.counterRef.current)   获取到子组件对象
        this.counterRef.current.increment();
    }

    changeTest() {
        // console.log(this.refs.titleRef)
        //方式1：字符串 不推荐
        this.refs.titleRef.innerHTML = "Hello Bill";
    //    方式2
        console.log(this.titleRef.current)
        this.titleRef.current.innerHTML = "Hello Claire";
        //方式3
        // console.log(this.titleEl)
        this.titleEl.innerHTML = "Hello Chris"
    }
}


export default App;