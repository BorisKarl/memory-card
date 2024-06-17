import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './components/Cards'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
    <Footer />
  </React.StrictMode>
);
