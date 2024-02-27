import { useEffect, useState } from "react";
import cardStyle from '../styles/cardStyle.module.css'
import zero from '../images/zero.png'


// This file contains the Individual pokemon cards and the generation logic
// It returns a clickable pokemon card with the sprite and pokemon number

export default function Card({pokemonId, sprite, gameLogic, gameSet, setSprites}){
    // console.log(getRandomSprite())


    // Check if the card was clicked before, otherwise, generate new sprites on parent prop
    async function clickHandler(){
        let clicked = gameLogic.clickChecker(pokemonId)
        if(clicked){
            alert(`Game Over`)
            gameSet(true)
        }else{
            await gameLogic.generateNew()
            const newSprites = {...gameLogic.getPokeDict()}
            setSprites(newSprites)

        }

    }


    return(
        <section className={`${cardStyle['pokemonCard']}`}  onClick={()=>clickHandler()}>
            {/* {!sprite && <img src={zero} alt="'loading...'"/> } */}
            {sprite && <img src={sprite} alt="pokemon"/> || <p>Loading...</p>}
            {pokemonId && <p>No: {pokemonId}</p>}
        </section>


    )


}