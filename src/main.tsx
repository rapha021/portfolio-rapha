import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>
);
