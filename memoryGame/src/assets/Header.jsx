import { useState } from "react"
import basic from '../styles/basic.module.css'



//  This contains the Header component. It primarily contains the logics and visuals for scoring, reset
// and how to play dialog option.

export default function Header({gameSet, setScore,setSprites, gameLogic}){
  


    const [open, setOpen] = useState(false)

    function resetHandler(){
        gameLogic.resetGame()
        setScore(0)
        setSprites({})
        gameSet(true)
        console.log('Game Reset')
    
    }

 

    return(
        <header className={basic.headerStyle}>


            <dialog open={open}>
                <button aria-label="close button" autoFocus onClick={() => setOpen(!open)}>close</button>
                how to play: <br/>
                1. Click on each unique pokemon once. <br/>
                2. Once clicked, new pokemon will be added <br/>
                3. repeat as many times as possible!
            </dialog>

            <h1>MemoryDex</h1>
            <h2>Max Score: {gameLogic.getMaxScore()}</h2>
            <h2>Current Score: {gameLogic.getScore()}</h2>


            <button
                onClick={() => setOpen(!open)}
            >
                How to Play
            </button>

            <button
                onClick={() => resetHandler()}
            >
                New Game
            </button>


        </header>






    )















}