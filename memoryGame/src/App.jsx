import { useState, useEffect } from 'react'

import gameLogic from './helper/gameLogic'

import './App.css'
import basic from './styles/basic.module.css'

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
      <Header className="AppTop" gameSet={gameSet} setScore={setScore} setSprites={setSprites} gameLogic={newGame}/>
      <CardContainer className="AppMid" sprites={sprites} setScore={setScore} gameLogic={newGame} gameSet={gameSet} setSprites={setSprites}/>
      <footer className={basic.footerStyle}>Thanks for Playing!</footer>
    
    </>
  )
}

export default App
