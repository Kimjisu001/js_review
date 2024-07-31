import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import App from "./App.js";
//import App from "./Condition";
//import App from "./Event.js";
//import App from "./Book.js";
//import App from "./EffectComponemt.js";
//import App from "./CustomerComponent.js";
//import App from "./ProductStateComponemt";
//import App from "./Comp08_Form_ref";
import App from "./BoardComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
