import React from 'react'
import type { MouseEvent } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const fn = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault()
    console.log('clicked ...... ', name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button onClick={event => fn(event, 'tom')}>click tom</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
