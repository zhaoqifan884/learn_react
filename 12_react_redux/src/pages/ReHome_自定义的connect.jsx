import React, {PureComponent} from 'react';
import {connect} from "../utils/connect";
import {incAction, addAction} from "../store/actionCreators";

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数： {this.props.counter}</h2>
        <button onClick={event => this.props.increment()}>+1</button>
        <button onClick={event => this.props.addNum(5)}>+5</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction())
  },
  addNum(num) {
    dispatch(addAction(num))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)