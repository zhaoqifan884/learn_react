import React, {PureComponent} from 'react';

class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location)
    return (
      <div>
        Detail2: {this.props.location.search}
      </div>
    );
  }
}

export default Detail2;