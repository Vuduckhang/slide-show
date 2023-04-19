import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.scss'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
