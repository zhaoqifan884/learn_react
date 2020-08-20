import React, {PureComponent} from 'react';

class Detail3 extends PureComponent {
  render() {
    const location = this.props.location
    console.log(location);
    return (
      <div>
        Detail3  {location.state.name + ' ' +  location.state.age + ' ' + location.state.height}
      </div>
    );
  }
}

export default Detail3;