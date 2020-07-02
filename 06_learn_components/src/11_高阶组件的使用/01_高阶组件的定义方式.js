import React, {PureComponent} from 'react';

class App extends PureComponent {
    render() {
        return (
            <div>
               Aoo
            </div>
        );
    }
}

//高阶组件    接收一个组件作为参数，并返回另外一个组件
function enhanceComponent(WrapperComponent) {
    return class NewComponent extends PureComponent{
        render() {
            return <WrapperComponent/>
        }
    }
}

const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;