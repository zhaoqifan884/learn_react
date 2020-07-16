import React, {PureComponent} from 'react';
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";


class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            commentList: []
        }
    }
    render() {
        return (
            <div style={{width: '500px', padding: '20px'}}>
                {
                    this.state.commentList.map((item, index) => {
                        return <CommentItem key={item.id}
                                            comment={item}
                                            removeItem={event => this.removeComment(index)}/>
                    })
                }
                {/*子组件传父组件用事件传递*/}
                <CommentInput submitComment={info => this.submitComment(info)}/>
            </div>
        );
    }
    submitComment(info) {
        // console.log(info)
        this.setState({
            commentList: [...this.state.commentList, info]
        })
    }

    //删掉评论
    removeComment(index) {
        // console.log(index)
        const newCommentList = [...this.state.commentList];
        newCommentList.splice(index, 1);
        this.setState({
            commentList: newCommentList
        })

    }
}


export default App;