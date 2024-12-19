import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` for React 18+
import App from "./App";
import "./styles.css"; // Include your styles

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
