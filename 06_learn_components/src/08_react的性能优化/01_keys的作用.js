import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        //this.state的数据保持不可变性
        this.state = {
            movies: ["星际穿越", "盗梦空间"]
        }
    }
    render()
    {
        return (
            <div>
                <h2>电影列表</h2>
                <ul>
                    {
                        this.state.movies.map((item, index) => {
                            //1.key是唯一的
                            //2.key不要使用随机数（在下一次使用render时，会生成新的数）
                            //使用index作为key,对性能没有优化
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={event => this.insertMovies()}>添加电影</button>
            </div>
        );
    }

    insertMovies() {
        //ppt方法1： 该方法加不加key意义不大，因为他是从后面加，前面不用改
        /*this.setState({
            movies: [...this.state.movies, "大话西游"]
        })*/

        this.setState({
            movies: ["大话西游", ...this.state.movies]
        })
    }
}

export default App;