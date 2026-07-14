import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Context/AuthContext";   // named import
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>

);
