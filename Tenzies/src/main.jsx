import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {TenziesApp} from './Components/App/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TenziesApp />
  </StrictMode>,
)
