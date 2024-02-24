import { useEffect, useState } from "react";




export default function Card({pokemonId, sprite, gameLogic, gameSet, setSprites}){
    // console.log(getRandomSprite())


    async function clickHandler(){
        let clicked = gameLogic.clickChecker(pokemonId)
        if(clicked){
            gameSet(true)
        }else{
            await gameLogic.generateNew()
            const newSprites = {...gameLogic.getPokeDict()}
            setSprites(newSprites)

        }

    }


    return(
        <section className="card-container" onClick={()=>clickHandler()}>
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
            {pokemonId && <p>Pokemon No: {pokemonId}</p>}
        </section>


    )


}