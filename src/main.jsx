import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../style.css"
import App from "./App"

createRoot(document.getElementById('root')).render(
  <div className='main'>
    <App />
  </div>,
)
