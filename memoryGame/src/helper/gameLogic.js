import getRandomSprite from "../util/spriteGetter"



const gameLogic = () => {

    let score = 0
    let maxScore = 0

    let pokemonId = []
    let pokemonSprite = []
    let clickedPokemon = {}
    let pokemonDict = {}

    // Generate two arrays, Array of Pokemon Id's and Array of Pokemon Sprite urls
    // For Each of the Id's initialise the clicks to prevent game over
    const generateNew = async (count) => {
        [pokemonId, pokemonSprite] = await getRandomSprite(count, pokemonId, pokemonSprite)
        
        for(const id in pokemonId){
            pokemonDict[pokemonId[id]] = pokemonSprite[id]
            if(id in clickedPokemon){
                continue
            }else{
                clickedPokemon[id] = false
            }
        }
    }



    //Onclick, check if the pokemonId has already been clicked before.
    //If so gameover, otherwise continue -> Calculate the score
    const clickChecker = (clickID) => {
        if (clickedPokemon[clickID] === true){
            console.log("gameOver")
            if(score >= maxScore){
                maxScore = score
                score = 0
            }
            return true
        }else{
            score += 1
            return false
        }
    }

    const getScore = () => score
    const getMaxScore = () => maxScore
    const getPokeDict = () => pokemonDict

    const resetGame = () => {
        score = 0
        pokemonId = []
        pokemonSprite = []
        clickedPokemon = {}
        generateNew()
    }


    return { generateNew, clickChecker, resetGame, getScore, getMaxScore, getPokeDict}
}




export default gameLogic