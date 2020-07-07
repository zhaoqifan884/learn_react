import styled from "styled-components";

export const HomeWrapper = styled.div`
   font-size: 20px;
   color: red;
   
   //样式嵌套
   .banner {
       background-color: blue;
   }
   
   span {
       color: #cccccc;
       
       &.active {
          color: #f00;
       }
       //伪类  当手指放上去的时候，是一种颜色
       &:hover {
           color: chartreuse;
       }
       //为元素
       &::after {
            content: "aaa";
       }
   }
   
   /*.active {
       color: #f00;
   }*/
`;

export const TitleWrapper = styled.h2`
   text-decoration: underline;
   //app中共享主题传过来的
   color: ${props => props.theme.themeColor};
   font-size: ${props => props.theme.fontSize};
`;
