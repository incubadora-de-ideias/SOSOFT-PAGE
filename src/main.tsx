import ReactDOM from "react-dom/client"
import './index.css'
import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AtualizarPágina from "./Hooks/AtualizarPágina"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/SOSOFT-PAGE">
    <AtualizarPágina></AtualizarPágina>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
