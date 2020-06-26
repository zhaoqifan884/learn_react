import React, {Component} from 'react';

class NacBar2 extends Component {
  render() {
    const {leftSolt, centerSolt, rightSolt} = this.props;

    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">
          {leftSolt}
        </div>
        <div className="nav-center">
          {centerSolt}
        </div>
        <div className="nav-right">
          {rightSolt}
        </div>
      </div>
    );
  }
}

export default NacBar2;