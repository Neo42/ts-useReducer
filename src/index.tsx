import React from "react"
import ReactDOM from "react-dom"
import './theme.css'
import './styles.css'
import App from "./App"

function ColorfulBorder() {
  return (
    <ul className='border-container'>
      <li className='border-item' style={{ background: 'var(--red)' }} />
      <li className='border-item' style={{ background: 'var(--blue)' }} />
      <li className='border-item' style={{ background: 'var(--pink)' }} />
      <li className='border-item' style={{ background: 'var(--yellow)' }} />
      <li className='border-item' style={{ background: 'var(--aqua)' }} />
    </ul>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ColorfulBorder />
    <div className='container'>
      <App />
    </div>
  </React.StrictMode>,
  rootElement
)
