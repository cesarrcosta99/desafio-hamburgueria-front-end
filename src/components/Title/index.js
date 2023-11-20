import React from "react";
import { H1 } from "./styles";

function Title({children,newTitle}) {
    return <H1 newTitle={newTitle}>{children}</H1>
}

export default Title