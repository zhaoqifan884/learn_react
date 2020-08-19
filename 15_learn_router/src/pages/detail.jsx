import React, {PureComponent} from 'react';

class Detail extends PureComponent {
  render() {
    const match = this.props.match;
    // console.log(match.params.id)
    return (
      <div>
        Detail  id:{match.params.id}
      </div>
    );
  }
}

export default Detail;