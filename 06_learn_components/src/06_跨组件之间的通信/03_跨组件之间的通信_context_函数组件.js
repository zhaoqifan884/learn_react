import React, {Component} from 'react';

//创建context对象
const UserContext = React.createContext({
  nikeName: "aaa",
  level: -1
});

//如果想用this.context，必须要用类组件
function ProfileHead() {
  return(
    <UserContext.Consumer>
      {
        value => {
          return(
            <div>
              <h2>{value.nikeName}</h2>
              <h2>{value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}



function Profile() {
  return(
    <div>
      {/*<ProfileHead nikeName={props.nikeName} level={props.level}/>*/}
      {/*...props    元素的展开*/}
      <ProfileHead/>
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
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>

      </div>
    );
  }
}

export default App;