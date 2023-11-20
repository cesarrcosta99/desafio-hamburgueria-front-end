import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, SecondContainer,CodeBurguer } from "./styles";
import Title from "../../components/Title"
import Button from "../../components/Button"
import ImagemCodeBurguer from "../../assets/burger 1.png";

function App() {

   const inputPedido=useRef()
   const inputName=useRef()
   const navigate=useNavigate()

     async function cadastrarPedido() {
      
        await axios.post("http://localhost:3001/order", {
          order:inputPedido.current.value,
          clientName:inputName.current.value
        })
        navigate("/users")
    }

   

  return (
    <Container>
    
      <CodeBurguer src={ImagemCodeBurguer} alt="Imagem" />
      <Title>Faça seu pedido!</Title>

        <SecondContainer>
      <p>Pedido</p>
      <input placeholder="Pedido" ref={inputPedido}/>

      <p>Nome do Cliente</p>
      <input placeholder="Nome" ref={inputName} />

      <Button onClick={cadastrarPedido}>Novo Pedido</Button>
      </SecondContainer>

    </Container>
  );
}

export default App;
