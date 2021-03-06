import React, {PureComponent} from 'react';

import {CSSTransition} from "react-transition-group";
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './CSSTransition.css'

const { Meta } = Card;

class CssTransitionDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: true
        }
    }
    render() {
        const {isShow} = this.state;
        return (
            <div>
                <button onClick={event => this.changeShow()}>显示/隐藏</button>
                {/*in: 决定动画的显示/隐藏    */}
                {/*timeout: 控制class是否在dom上移除的时间     动画的时间是由css决定的*/}
                <CSSTransition in={isShow}
                               classNames={'card'}
                               timeout={300}
                               unmountOnExit={true}
                               appear
                               onEnter={element => console.log('开始进入')}
                               onEntering={element => console.log('正在进入')}
                               onEntered={element => console.log('进入完成')}
                               onExit={element => console.log('开始退出')}
                               onExiting={element => console.log('退出状态')}
                               onExited={element => console.log('退出完成')}>
                    {/*unmountOnExit 如果想要在图片隐藏的时候将dom移除，需要改为true*/}
                    {/*如果需要页面点开也显示动画，则添加appear属性*/}
                    {/*onEnter 拿到CSSTransition包裹的元素*/}
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594879181644&di=b3b26e90a591d8cee3f26cf440afe964&imgtype=0&src=http%3A%2F%2Fpic.nen.com.cn%2F0%2F12%2F12%2F28%2F12122876_637955.jpg" />}
                            title="Bill Chou"
                            description="This is the description"
                        />
                    </Card>
                </CSSTransition>

            </div>
        );
    }

    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default CssTransitionDemo;