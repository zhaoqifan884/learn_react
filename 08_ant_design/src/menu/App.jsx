import React, {PureComponent} from 'react';
import {Menu, Switch} from "antd";
import { MailOutlined} from "@ant-design/icons";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'dark',
            current: '1'
        }
    }
    render() {
        const {SubMenu} = Menu;
        const {theme, current} = this.state;
        return (
            <>
                <Switch
                    checked={theme === 'dark'}
                    onChange={value => this.changeTheme(value)}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"/>
                <br />
                <br />
                <Menu
                    theme={theme}
                    onClick={event => this.handleClick(event)}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline">
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </>
        );
    }

    handleClick(event) {
        // console.log(event.key)
        this.setState({
            current: event.key
        })
    }

    changeTheme(value) {
        this.setState({
            theme: value? 'dark' : 'light'
        })
    }
}


export default App;