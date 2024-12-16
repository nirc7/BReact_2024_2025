import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <App2 />
  // <BrowserRouter >
  //   <StrictMode>
  //     <App />
  //   </StrictMode>
  // </BrowserRouter>,
)
