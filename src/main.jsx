import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
// import { createContext } from 'react'
// import data from '../data.jsx'
import { FamilyProvider } from './familyContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <FamilyProvider >
        <App />
      </FamilyProvider>
    </Router>
  </React.StrictMode>,
)
