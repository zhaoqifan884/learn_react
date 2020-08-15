import {takeEvery, put, all} from 'redux-saga/effects'
//takeEvery监听每个action发布的type
import axios from 'axios'
import {FETCH_HOME_MULTIDATA} from "./constants";
import {changeRecommendAction, changeBannersAction} from "./actionCreators";

//生成器函数
function *fetchHomeMultidata(action) {
  // get会直接返回Promise
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banner = res.data.data.banner.list;
  const recommend = res.data.data.recommend.list;
 /*
  //内部有一个循环，判断done是否为true,判断是否要继续执行
  yield put(changeBannersAction(banner));
  yield put(changeRecommendAction(recommend));*/
 yield all([
   yield put(changeBannersAction(banner)),
   yield put(changeRecommendAction(recommend))
 ])
  // console.log(res)
}

function *mySaga() {
  //yield takeEvery(拦截器，生成器),   当拦截FETCH_HOME_MULTIDATA，执行fetchHomeMultidata生成器

  // takeLatest takeEvery区别:
  // takeLatest: 依次只能监听一个对应的action  总是执行最后一个
  // takeEvery: 每一个都会被执行
  //监听单个
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  //监听多个
  yield all([
    takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  ])
}

export default mySaga;