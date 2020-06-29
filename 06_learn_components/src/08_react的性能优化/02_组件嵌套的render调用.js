import React, {Component} from "react";

//封装三个组件
//Head
function Head() {
    console.log("head被调用");
    return <h2>我是head组件</h2>
}

//Main
class Banner extends Component{
    render() {
        console.log("Banner render被调用");
        return (
            <div>
                <h3>我是Banner组件</h3>
            </div>
        );
    }
}

function ProductList() {
    console.log("ProductList被调用");
    //ul>li{商品列表$}*5
    return(
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
            <li>商品列表4</li>
            <li>商品列表5</li>
        </ul>
    )
}

class Main extends Component{
    render() {
        console.log("Main render被调用");
        return(
            <div>
                <Banner/>
                <ProductList/>
            </div>
        )
    }
}

//Footer
function Footer() {
    console.log("Foo被调用");
    return <h2>我是footer组件</h2>
}

export default class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        console.log("App render被调用");
        return(
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={event => this.increment()}>+1</button>
                {/*在执行程序时，改变上面文本，下面也会重新执行，很影响性能，所以要优化react代码*/}
                <Head/>
                <Main/>
                <Footer/>
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}