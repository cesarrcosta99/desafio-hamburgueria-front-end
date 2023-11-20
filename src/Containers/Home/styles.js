import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0a0a10;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #eeeeee;
    margin-left: 32px;
    margin-bottom: 1px;
  }

  input {
    width: 342px;
    height: 58px;
    border-radius: 14px;
    border: none;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #ffffff40;
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
    line-height: 21px;
    padding-left: 20px;
    outline: none;
    margin-bottom: 40px;
  }
`;

export const CodeBurguer = styled.img`
  width: 342px;
  height: 354px;
  margin-top:10px;
`;



