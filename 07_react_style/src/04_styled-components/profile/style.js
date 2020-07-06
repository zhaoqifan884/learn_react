import styled from "styled-components";

/**
 * 特点：
 * 1.props的穿透
 * 2.attrs的使用
 * 3.传入state作为style属性
 */
 export const HYInput = styled.input.attrs({
  //占位文字
  placeholder: "Bill Chou",
  borderColor: "red"
})`
   background-color: aqua;
   border-color: ${props => props.borderColor};
   //HYInput标签中的color属性会和attrs中的函数结合使用，会一起传值props中
   color: ${props => props.color};
`;