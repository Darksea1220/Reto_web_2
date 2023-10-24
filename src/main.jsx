import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);


applyPolyfills().then(() => {
  defineCustomElements(window);
});
