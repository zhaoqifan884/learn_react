import React, {PureComponent} from 'react';

class Detail extends PureComponent {
  render() {
    //动态路由通过match传递
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