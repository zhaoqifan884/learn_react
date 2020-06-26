import React, {Component} from 'react';

import NacBar from "./NacBar";
import NacBar2 from "./NacBar2"

class App extends Component {
  render() {
    return (
      <div>
        <NacBar name="" title="" className="">
          <span>aaa</span>
          <strong>bbb</strong>
          <a href="/#">ccc</a>
        </NacBar>

        <NacBar2 leftSolt={<span>aaa</span>}
                 centerSolt={<strong>bbb</strong>}
                 rightSolt={<a href="/#">ccc</a>}/>
      </div>
    );
  }
}

export default App;