import { useEffect, useState } from "react";
import getRandomSprite from "../util/spriteGetter";



export default function Card(){
    // console.log(getRandomSprite())

    const [sprite, setSprite] = useState(null)

    useEffect(() =>{
        const getId = async () => {
            const [id, newSprite] = await getRandomSprite(10);
            // newSprite.then(s => setSprite(s))
            setSprite(newSprite[2])
            // console.log(id)
        }
        getId().catch(console.error)

    },[])

    return(
        <section className="card-container" onClick={()=>alert(sprite)}>
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
            {/* {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'}
            {sprite && <img src={sprite} alt="pokemon"/> || 'loading...'} */}
        </section>


    )


}