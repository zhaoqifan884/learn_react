import React, {PureComponent} from 'react';
import "./style.css"

class Profile extends PureComponent {
  render() {
    return (
      <div className={'profile'}>
        <h2 className={'title'}>我是profile标题</h2>
        <ul className={'setting'}>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}

export default Profile;