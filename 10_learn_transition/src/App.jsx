import React, {PureComponent} from 'react';
import CssTransitionDemo from "./transition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/SwitchTransitionDemo";
import TransitionGroupDemo from "./transition/TransitionGroupDemo";

class App extends PureComponent {
    render() {
        return (
            <div>
                <CssTransitionDemo/>
                <SwitchTransitionDemo/>
                <TransitionGroupDemo/>
            </div>
        );
    }
}

export default App;