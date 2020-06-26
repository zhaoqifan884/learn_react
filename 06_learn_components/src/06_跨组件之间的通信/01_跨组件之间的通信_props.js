import React, {Component} from 'react';

function ProfileHead(props) {
  return(
    <div>
      <h2>{props.nikeName}</h2>
      <h2>{props.level}</h2>
    </div>
  )
}

function Profile(props) {
  return(
    <div>
      {/*<ProfileHead nikeName={props.nikeName} level={props.level}/>*/}
      {/*...props    元素的展开*/}
      <ProfileHead {...props}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nikeName: "Bill Chiu",
      level: 99
    }
  }

  render()
  {
    // const {nikeName, level} = this.state;
    return (
      <div>
        {/*<Profile nikeName={nikeName} level={level}/>*/}
        <Profile {...this.state}/>
      </div>
    );
  }
}

export default App;