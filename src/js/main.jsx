import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { Home2 } from './components/Home2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home2/>
  </React.StrictMode>,
)
