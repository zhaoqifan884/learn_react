import React, {PureComponent} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './TransitionGroup.css'

class TransitionGroupDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            names: ['Lion', 'Ada', 'Jill']
        }
    }
    render() {
        return (
            <TransitionGroup>
                {
                    this.state.names.map((item, index) => {
                        return (
                            <CSSTransition key={item}
                                           timeout={500}
                                           classNames={'item'}>
                                <div>
                                    {item}
                                    <button onClick={event => this.removeItem(index)}>-</button>
                                </div>
                            </CSSTransition>
                        )
                    })
                }
                <button onClick={event => this.addName()}>+name</button>
            </TransitionGroup>
        );
    }

    removeItem(index) {
        this.setState({
            names: this.state.names.filter((item, indey) => index !== indey)
        })
    }

    addName() {
        this.setState({
            names: [...this.state.names, 'Chris']
        })
    }
}

export default TransitionGroupDemo;