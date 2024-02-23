/**
 * Gathers Array of PokemonID and Sprite. 
 * @param PokemonCount - Number of unique pokemon desired, max 1025
 * @param ArrayOfPokemonId - optional - expand the current array with new arrays
 * @param spriteArr - optional - expand the current array with new Array
 * @return Array1 pokemonId, Array2 pokemonSprite-Src
 */
function getRandomSprite(count=1, idArr=[], spriteArr=[]){
    if(count > 1025){
        count = 1025
    }else if(count<1){
        count = 1
    }

    let generationCount = idArr.length + count

    while(idArr.length < generationCount){
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


    return [idArr , spriteArr]
}


export default getRandomSprite