import React, { PureComponent } from 'react';
import {HYButton, HYPrimaryButton} from "./style";
import Home from "../home";
import Profile from "../profile";
import {ThemeProvider}from "styled-components";

export default class App extends PureComponent {
  render() {
    return (
      //共享主题-------》 home TitleWrapper
      <ThemeProvider theme={{themeColor: "yellow", fontSize: "30px"}}>
        App
        <h2>我是App的title</h2>
        <Home/>
        <hr/>
        <Profile/>
        <HYButton>我是普通按钮</HYButton>
        <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}
