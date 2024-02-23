import { useEffect, useState } from "react";




export default function CardContainer({pokemonDict, setScore, gameLogic}){

    console.log(pokemonDict)


    return(
        <>
            <h1>wow</h1>
            <button onClick={()=>{setScore(gameLogic.getScore() + 1)}}>+1</button>
        </>
        
    )




}