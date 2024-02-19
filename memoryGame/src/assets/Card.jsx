import { useEffect, useState } from "react";


async function getRandomSprite(){
    const pokemonID = Math.floor(Math.random()*1025);
    const newSprite = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`);
    // console.log(newSprite);
    return newSprite.url
}





export default function Card(){


    const [sprite, setSprite] = useState(null)

    useEffect(() =>{
        const newSprite = getRandomSprite();
        newSprite.then(s => setSprite(s))

    },[])

    return(
        <section className="card-container" onClick={()=>alert(sprite)}>
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
        </section>


    )


}