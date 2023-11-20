import React, { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SacolaBurguer from "../../assets/burger (1) 1.png";
import {
  Container,
  Pedidos,
  PedidoNome,
  Imagem,
  ImagemLixeira,
} from "./styles";
import Title from "../../components/Title"
import Button from "../../components/Button"
import Lixeira from "../../assets/18297 4.svg";



function Users() {
  const [newPedido, setNewPedido] = useState([]);
  const navigate=useNavigate()

    
  useEffect(()=> {
    async function newRequest() {
      const {data}=await axios.get("http://localhost:3001/order")
      console.log(data)
      setNewPedido(data)
    }

      newRequest()
  },[])

  async function deleteOrder(id) {
    await axios.delete(`http://localhost:3001/order/${id}`)

    const order=newPedido.filter((element)=> element.id !== id )

    setNewPedido(order)
  }

  function back() {
    navigate("/")
  }

  return (
    <Container>
      <Imagem src={SacolaBurguer} alt="sacola-burguer" />
      <Title newTitle={true} >Pedidos</Title>

     <ul>
        {newPedido.map((pedido) =>( 
          <Pedidos key={pedido.id}>
            <PedidoNome>
            <p>{pedido.order}</p> <p>{pedido.clientName}</p>
            </PedidoNome>
            <ImagemLixeira onClick={()=> deleteOrder(pedido.id)}>
              <img src={Lixeira} alt="lixeira" />
            </ImagemLixeira>
          </Pedidos>
        ))}
      </ul>

      <Button onClick={back} newBotton={true}>Voltar</Button>
    </Container>
  );
}

export default Users;
