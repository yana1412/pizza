import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const elementRoot = document.getElementById('root')

if(elementRoot){
  const root = ReactDOM.createRoot(elementRoot)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
}


reportWebVitals()
