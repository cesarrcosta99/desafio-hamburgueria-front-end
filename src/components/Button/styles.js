import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background:${props=>props.newBotton ? `#2c2c31` : `#d93856`};
  font-size: 17px;
  font-weight: 900;
  line-height: 3px;
  text-align: center;
  border: none;
  color: #ffffff;
  margin-top:${props=>props.newBotton ? `44px` : `37px`};
  margin-bottom:${props=>props.newBotton ? `67px` : `70px`};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

 
`;
