import { useState, useEffect } from 'react'

import gameLogic from './helper/gameLogic'

import './App.css'
import Header from './assets/Header'
import CardContainer from './assets/CardContainer'
import Card from './assets/Card'


const newGame = gameLogic()


function App() {
  const [gameState, gameSet] = useState(0)
  const [score, setScore] = useState(0)
  const [sprites, setSprites] = useState({})

  useEffect(()=>{
    
    setScore(newGame.getScore())

    const setup = async() => {
      await newGame.generateNew(score)
      setSprites(newGame.getPokeDict())
    }
    setup()

  }, [score])

  return (
    <>
      <h1>Memory Game</h1>
      <h2>score {score}</h2>
      <Header gameState={gameState} gameSet={gameSet}/>
      <CardContainer pokemonDict={sprites} setScore={setScore} gameLogic={newGame}/>
      <Card/>

    
    </>
  )
}

export default App
