import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  html, body, #app, #app>div {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: aliceblue;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
