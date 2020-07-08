import React, {PureComponent} from 'react';
import classNames from 'classnames'

//classnames的使用
class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true,
            isBar: false,
            errClass: "error",
            warnClass: null,
            aaa: undefined,
            zero: 0,
            one: 1
        }
    }

    render() {
        const {isActive, isBar, errClass, warnClass, aaa, zero, one} = this.state;
        return (
            <div>
                {/*原生react中添加元素的方法*/}
                <h2 className={'foo bar active title'}>我是标题1</h2>
                <h2 className={'title ' + (isActive ? "active" : "")}>我是标题2</h2>
                <h2 className={['title', (isActive ? "active" : "")].join(" ")}>我是标题3</h2>
            {/*  classnames库添加class*/}
                <h2 className={classNames({"active": isActive, "bar": isBar})}>我是标题4</h2>
                <h2 className={classNames("foo", errClass, warnClass, {'active' : isActive})}>我是标题5</h2>
                <h2 className={classNames(aaa, zero, one)}>我是标题6</h2>
            </div>
        );
    }
}


export default App;