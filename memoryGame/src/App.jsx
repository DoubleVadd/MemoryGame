import { useState, useEffect } from 'react'

import gameLogic from './helper/gameLogic'

import './App.css'
import Header from './assets/Header'
import CardContainer from './assets/CardContainer'


const newGame = gameLogic()


function App() {
  const [gameState, gameSet] = useState(false)
  const [score, setScore] = useState(0)
  const [sprites, setSprites] = useState({})


  // console.log('parent rerendered')

  useEffect(()=>{
    
    if(gameState){
      newGame.resetGame()
      gameSet(false)
    }

    const setup = async() => {
      await newGame.generateNew()
      setSprites(newGame.getPokeDict())
    }
    setup()

  }, [gameState])


  return (
    <>
      <h1>Memory Game</h1>
      <h2>score {score}</h2>
      <Header gameSet={gameSet} setScore={setScore} setSprites={setSprites} gameLogic={newGame}/>
      <CardContainer sprites={sprites} setScore={setScore} gameLogic={newGame} gameSet={gameSet} setSprites={setSprites}/>
    
    </>
  )
}

export default App
