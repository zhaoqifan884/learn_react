import React, {PureComponent} from 'react';

import './SwitchTransition.css'
import {CSSTransition, SwitchTransition} from "react-transition-group";

class SwitchTransitionDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }
    }
    render() {
        const {isOn} = this.state;
        return (
            <div>
                {/*mode:  out-in  先退出再进来     in-out  先进来再出去*/}
                <SwitchTransition mode={'out-in'}>
                    <CSSTransition key={isOn ? 'on' : 'off'}
                                   classNames={'btn'}
                                   timeout={1000}>
                        <button onClick={event => this.changeIsOn()}>{isOn ? 'on' : 'off'}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );
    }

    changeIsOn() {
        this.setState({
            isOn: ! this.state.isOn
        })
    }
}

export default SwitchTransitionDemo;