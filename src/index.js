import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={"dark"} />
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);
