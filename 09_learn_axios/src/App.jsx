import React, {PureComponent} from 'react';
// import axios from 'axios'
import request from './service/request'

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    async componentDidMount() {
      /*  //拿到页面数据res  真实开发逻辑
        this.setState({
            products: [...this.state.products, ...res]
        })*/
      //1.axios发送基本网络请求,再返回调用的时候，最终返回的是promise（异步）
       /* axios({
            url: 'https://httpbin.org/get',
            params: {
                name: 'Bill Chou',
                age: 18
            },
            method: 'get'//默认为get请求，所以，可以省略
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
       axios({
           url: 'https://httpbin.org/post',
           data: {
               name: 'lion',
               age: 22
           },
           method: 'post'
       }).then(res => {
           console.log(res)
       }).catch(err => {
           console.error(err)
       })*/
//2
      /* axios.get('https://httpbin.org/get', {
           params: {
               name: 'ada',
               age: 54
           }
       }).then(console.log);

        axios.post('https://httpbin.org/post',{
            name: 'claire',
            age: 36
        }).then(console.log);*/
//3
      //await async  通过同步方式获取异步请求
        /*try {
            const result = await axios.get('/get', {
                params: {
                    name: 'toy',
                    age: 60
                }
            });
            console.log(result)
        }catch (err) {
            console.error(err)
        }*/

        //4
       /* const request1 = axios.get('https://httpbin.org/get', {
            params: {
                name: 'Bill',
                age: 55
            }
        });
        const request2 = axios.post('https://httpbin.org/post',{
            name: 'Tom',
            age: 11
        });
        axios.all([request1, request2]).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        });

        //axios.all的本质
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('promise1')
            },1000)
        });
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('promise2')
            },3000)
        });

        Promise.all([promise1, promise2]).then(res => {
            console.log(res)
        })*/

       //6.请求/响应拦截
        //请求拦截
        /*axios.interceptors.request.use(config => {
            // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

            // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

            // 3.params/data序列化的操作
            console.log('请求被拦截');
            return config;
        }, error => {
            console.error('请求中断')
        })

        //响应拦截
        axios.interceptors.response.use(res => {
            console.log('响应被拦截');
            return res.data;
        }, error => {
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        console.log('请求错误');
                        break;
                    case 401:
                        console.log('未授权访问');
                        break;
                    default:
                        console.log('其他错误信息')

                }
            }
            return error
        });

        axios.get('https://httpbin.org/get', {
            params: {
                name: "why"
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })*/

        request({
            url: '/get',
            params: {
                name: 'why',
                age: 18
            }
        })
    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}


export default App;