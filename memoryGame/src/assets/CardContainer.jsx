import { useEffect, useState } from "react";
import { arrShuffle } from "../util/shuffleArr";

// Component
import Card from './Card'
// Component Style
import cardStyle from '../styles/cardStyle.module.css'




// This is the deck holder. It holds and displays all the relevant cards that are generated
//  by it's children

export default function CardContainer({sprites, setScore, gameLogic, gameSet, setSprites}){

    // Keeps track of the current cards for the play session
    const [cards, setCards] = useState([])
    const [visible, setVisibility] = useState(false)

    // Creates a deck of cards given new sprites array, and displays them as list items
    // The cards are shuffled before creating a new list to ensure change between renders
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

    // Set cards on every sprite update
    useEffect(() =>{
        setVisibility(true)
        console.log('setting cards')
        setCards(cardCreator(sprites))
        setTimeout(()=>{setVisibility(false)}, 500)
    }, [sprites])
    
    
    console.log('rendered cardHolder')
    
    return(
        <>
            <ul className={`${cardStyle.cardContainer} ${visible && cardStyle['invisible']}  ${!visible && cardStyle['visible']}`} >
                {cards}
            </ul>
        </>
        
    )




}