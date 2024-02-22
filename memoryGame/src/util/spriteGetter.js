/**
 * Gathers Array of PokemonID and Sprite. 
 * @param PokemonCount - Number of unique pokemon desired, max 1025
 * @return Array1 pokemonId, Array2 pokemonSprite-Src
 */
function getRandomSprite(count=1){
    if(count > 1025){
        count = 1025
    }

    const idArr = []
    const spriteArr = []

    while(idArr.length < count){
        const pokemonID = Math.floor(Math.random()*1025);
        if(idArr.indexOf(pokemonID) === -1) {
            idArr.push(pokemonID);
            // const newSprite = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`);
            // spriteArr.push(newSprite.url)
            const newSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`;
            spriteArr.push(newSprite)
        
        
        }
    }
    
    // console.log(idArr);

    // const pokemonID = Math.floor(Math.random()*1025);
    // const newSprite = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`);
    // // console.log(newSprite);
    if(idArr.length === 1){
        return [idArr[0] , spriteArr[0]]
    }


    return [idArr , spriteArr]
}


export default getRandomSprite