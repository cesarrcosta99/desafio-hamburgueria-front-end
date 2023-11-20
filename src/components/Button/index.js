import React from "react";
import { Button as Botao } from "./styles";

function Button({children,...props}) {
    return <Botao {...props}>{children}</Botao>
}

export default Button