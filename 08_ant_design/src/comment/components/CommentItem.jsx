import React, {PureComponent} from 'react';
import {Comment, Avatar, Tooltip} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

class CommentItem extends PureComponent {
    render() {
        const {nickname, avatar, content, dateTime} = this.props.comment;
        return (
            <Comment
                author={<a href={'/#'}>{nickname}</a>}
                avatar={
                    <Avatar src={avatar} alt={nickname}/>
                }
                content={<p>{content}</p>}
                datetime={
                    <Tooltip title={dateTime.format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{dateTime.fromNow()}</span>
                    </Tooltip>
                }
                actions={[
                    <span onClick={event => this.removeItem()}><DeleteOutlined/>删除</span>
                ]}
            />
        );
    }

    removeItem() {
        this.props.removeItem();
    }
}

export default CommentItem;