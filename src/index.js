import React from "react";
import reactDOM from "react-dom"
import { createRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />)

//reactDOM.render(<App />, document.getElementById("root"));