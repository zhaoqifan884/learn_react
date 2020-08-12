import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  FETCH_HOME_MULTIDATA,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants.js';
import axios from "axios";

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }


//之前返回对象
export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incAction = () => ({
  type: INCREMENT
});

export const decAction = () => ({
  type: DECREMENT
});

//轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  // banners: banners    两个相等是可以省略的
  banners
});

export const changeRecommendAction = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommend
});

//redux-thunk中定义的action   用了中间件返回函数
export  const getHomeMultidataAction = dispatch => {
  // console.log("action函数中", dispatch);
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    const data = res.data.data;
    // this.props.changeBanners(data.banner.list);
    // this.props.changeRecommend(data.recommend.list);
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list))
  })
};

//redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}