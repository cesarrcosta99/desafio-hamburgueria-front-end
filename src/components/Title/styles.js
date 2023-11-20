import styled from "styled-components"

export const H1=styled.h1`
    font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  color: #ffffff;
  margin-top: 21px;

  ${props=>props.newTitle &&`
      margin-top:0;
      margin-bottom:47px;
  `}
`