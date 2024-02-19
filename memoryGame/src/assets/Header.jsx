import { useState } from "react"

export default function Header({gameState, gameSet}){
  

    const[highScore, scoreSet] = useState(0)

    function resetHandler(){
        scoreSet(gameState)
        gameSet(0)
    
    }



    return(
        <header className="Header">
            <h1>Pokedex Memory</h1>
            <p>
                Current HighScore: {highScore}
            </p>

            <button
                onClick={() => resetHandler()}
            >
                New Game
            </button>


        </header>






    )















}