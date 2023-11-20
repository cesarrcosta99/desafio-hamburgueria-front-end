import React from "react";
import ReactDOM from "react-dom/client";
import MyRoutes from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
    <MyRoutes /> 
    <GlobalStyle />
</>
);
