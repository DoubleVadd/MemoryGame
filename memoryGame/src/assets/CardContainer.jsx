import { useEffect, useState } from "react";
import { arrShuffle } from "../util/shuffleArr";


import Card from './Card'





export default function CardContainer({sprites, setScore, gameLogic, gameSet, setSprites}){


    const [cards, setCards] = useState([])

    const cardCreator = (sprites) => {
        const pokemonArray = []
        Object.keys(sprites).forEach((key) =>{
            pokemonArray.push(
                <li key={key}>
                    <Card pokemonId={key} sprite={sprites[key]} gameLogic={gameLogic} gameSet={gameSet} setSprites={setSprites}/>
                </li>
            )

        })
        return <ul>{arrShuffle(pokemonArray)}</ul>
    }

    useEffect(() =>{
        setCards(cardCreator(sprites))
    }, [sprites])
    
    

    // console.log(sprites)
    console.log('rendered cardHolder')
    
    return(
        <>
            <ul>
                {cards}
            </ul>
        </>
        
    )




}