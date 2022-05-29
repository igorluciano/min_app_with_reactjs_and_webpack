// import React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";

const user = {
    "name": "Igor"
};

console.log(user.address?.personal);
// throw new Error("Um baita erro!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);