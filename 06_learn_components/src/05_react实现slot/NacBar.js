import React, {Component} from 'react';

class NacBar extends Component {
  render() {
    return (
      <div className="nav-item nav-bar">
        <div className="nav-left">
          {this.props.children[0]}
        </div>
        <div className="nav-center">
          {this.props.children[1]}
        </div>
        <div className="nav-right">
          {this.props.children[2]}
        </div>
      </div>
    );
  }
}

export default NacBar;