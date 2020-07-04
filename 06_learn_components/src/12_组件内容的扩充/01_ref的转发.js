import React, {PureComponent,createRef,forwardRef} from 'react';

class Home extends PureComponent{
  render() {
    return <h2>Home</h2>
  }
}

/**
 * forwardRef(function(props, ref))   ref是父组件<Profile>中传过来的
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const Profile = forwardRef(function(props,ref) {
  return <h2 ref={ref}>Profile</h2>
});

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef}/>
        <Profile ref={this.profileRef}/>
        <button onClick={event => this.printRef()}>打印ref</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}

export default App