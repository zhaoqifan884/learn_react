import styled from "styled-components";

export const HYButton = styled.button`
   padding: 10px 20px;
   border-color: chartreuse;
   color: red;
`;

//继承上面的属性
export const HYPrimaryButton =styled(HYButton)`
 color: blueviolet;
 background-color: sandybrown;
`;