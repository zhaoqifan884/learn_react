import React, {Component} from "react";

//封装三个组件
//Head
function Head() {
  return <h2>我是head组件</h2>
}

//Main
function Banner() {
  return <h3>我是Banner组件</h3>
}

function ProductList() {
  //ul>li{商品列表$}*5
  return(
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}
function Main() {
  return(
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}

//Footer
function Footer() {
  return <h2>我是footer组件</h2>
}

export default class App extends Component{
  render() {
    return(
      <div>
        <Head/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}