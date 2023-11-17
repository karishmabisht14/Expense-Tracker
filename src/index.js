import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ExpenseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExpenseProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
