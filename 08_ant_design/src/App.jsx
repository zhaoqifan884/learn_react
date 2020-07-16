import React, {PureComponent} from 'react';
import moment from "moment";

import {Button, DatePicker} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import HYHomeRecommend from "components/home/childCpns/home-recommend";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loadings: true
    }
  }
  render() {
    const {loadings} = this.state;
    return (
      //fragments短语法 <> </>
      <>
          <HYHomeRecommend/>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          // onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          // onClick={() => this.enterLoading(2)}
        />
        <DatePicker defaultValue={moment('2020-07-16', 'YYYY-MM-DD')}/>
        {/*<DatePicker defaultValue={moment('2015-06-06', "YYYY-MM-DD")}
                    // allowClear={false}/>*/}
  </>
    );
  }
}


export default App;