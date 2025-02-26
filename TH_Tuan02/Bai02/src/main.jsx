import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './exercise-3-class/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
