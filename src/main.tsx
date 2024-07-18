import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ParkProvider } from './contexts/MainContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParkProvider>
    <App />
    </ParkProvider>
  </React.StrictMode>,
)
