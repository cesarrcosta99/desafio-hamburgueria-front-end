import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pedidos = styled.li`
  width: 342px;
  height: 101px;
  border-radius: 14px;
  background: #ffffff40;
  display: flex;
  justify-content: space-around;
  margin-bottom: 22px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const PedidoNome = styled.div`
  margin-top: 25px;

  :first-child {
    font-size: 17px;
    font-weight: 300;
    line-height: 21px;
    color: #d1d1d2;
    margin-top: -9px;
    margin-bottom: 5px;
  }

  :last-of-type {
    font-size: 17px;
    font-weight: 700;
    line-height: 21px;
    color: #ffffff;
  }

  p {
    width: 208px;
  }
`;

export const Imagem = styled.img`
  width: 246px;
  height: 354px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
  color: #ffffff;
  margin-bottom: 47px;
`;



export const ImagemLixeira = styled.button`
  background: transparent;
  border: none;
  position: relative;
  left: 12px;
  top: 6px;
  cursor: pointer;
`;
