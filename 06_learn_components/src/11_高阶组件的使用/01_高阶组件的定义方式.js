import React, {PureComponent} from 'react';

class App extends PureComponent {
    render() {
        return (
            <div>
               Aoo: {this.props.name}
            </div>
        );
    }
}

//高阶组件     参数为组件，返回值为新组件的函数
// 接收一个组件作为参数，并返回另外一个组件
function enhanceComponent(WrappedComponent) {
    class NewComponent extends PureComponent {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }

    NewComponent.displayName = "Kobe";
    return NewComponent;
}

/*function enhanceComponent2(WrapperComponent) {
    function NewComponent(props) {
        return <WrapperComponent {...props}/>
    }
    NewComponent.displayName = "Lion";
    return NewComponent
}*/

const EnhanceComponent = enhanceComponent(App);

export default EnhanceComponent;