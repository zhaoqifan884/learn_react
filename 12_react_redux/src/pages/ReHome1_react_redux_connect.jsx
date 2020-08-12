import React, {PureComponent} from 'react';
// import {connect} from "../utils/connect";
import {connect} from 'react-redux'
import axios from 'axios'

import {incAction, addAction, changeBannersAction, changeRecommendAction} from "../store/actionCreators";

class Home extends PureComponent {

  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommend(data.recommend.list);
    })
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数： {this.props.counter}</h2>
        <button onClick={event => this.props.increment()}>+1</button>
        <button onClick={event => this.props.addNum(5)}>+5</button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction())
  },
  addNum(num) {
    dispatch(addAction(num))
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommend(recommend) {
    dispatch(changeRecommendAction(recommend))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home)