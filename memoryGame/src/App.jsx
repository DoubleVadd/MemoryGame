import { useState } from 'react'


import './App.css'
import Header from './assets/Header'
import Card from './assets/Card'



function App() {
  const [gameState, gameSet] = useState(0)

  return (
    <>
      <h1>Memory Game</h1>
      <Header gameState={gameState} gameSet={gameSet}/>
      <Card/>
    
    </>
  )
}

export default App
