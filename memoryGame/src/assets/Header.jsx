import { useState } from "react"

export default function Header({gameSet, setScore,setSprites, gameLogic}){
  

    function resetHandler(){
        gameLogic.resetGame()
        setScore(0)
        setSprites({})
        gameSet(true)
        console.log('Game Reset')
    
    }



    return(
        <header className="Header">
            <h1>Pokedex Memory</h1>
            <h2>Max Score: {gameLogic.getMaxScore()}</h2>
            <h2>Current Score: {gameLogic.getScore()}</h2>

            <button
                onClick={() => resetHandler()}
            >
                New Game
            </button>


        </header>






    )















}