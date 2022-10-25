import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ThemeProvider from "./contexts/darkmode.context"
import { ToastContainer } from "react-toastify"

import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import MainRoutes from "./routes/routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ToastContainer />
    <ThemeProvider>
      <MainRoutes />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
