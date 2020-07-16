import React, {PureComponent} from 'react';
import {Input, Button} from "antd";
import moment from "moment";

class CommentInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    render() {
        return (
            <div>
                {/*可在App中修改样式   因为这里的输入框占据100%，所以设置div的高度即可*/}
                <Input.TextArea rows={4} cols={30}
                                value={this.state.content}
                                onChange={event => this.handleChange(event)}/>
                <Button type={'primary'} onClick={event => this.addComment()}>添加文本</Button>
            </div>
        );
    }
    handleChange(event) {
        //受控组件    保存的信息全部在state中
        this.setState({
            content: event.target.value
        })
    }

    addComment() {
        // console.log(this.state.content);
        const commentInfo = {
            id: moment().valueOf(),
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594879181644&di=b3b26e90a591d8cee3f26cf440afe964&imgtype=0&src=http%3A%2F%2Fpic.nen.com.cn%2F0%2F12%2F12%2F28%2F12122876_637955.jpg',
            nickname: 'Bill Chou',
            dateTime: moment(),
            content: this.state.content
        };
        //传递参数给父组件
        this.props.submitComment(commentInfo);
        this.setState({
            content: ''
        })
    }
}

export default CommentInput;