import getRandomSprite from "../util/spriteGetter"

//  This file contains teh general game loop of the memory game
// Single instance of this function operates the whole game, keeping track of
// Scores, Clicks, and sprite information.

const gameLogic = () => {

    let score = 0
    let maxScore = 0

    let pokemonId = []
    let pokemonSprite = []
    let clickedPokemon = {}
    let pokemonDict = {}

    // Generate two arrays, Array of Pokemon Id's and Array of Pokemon Sprite urls
    // For Each of the Id's initialise the clicks to prevent game over
    const generateNew = async (count=1) => {
        [pokemonId, pokemonSprite] = await getRandomSprite(count, pokemonId, pokemonSprite)
        
        for(const id in pokemonId){
            if(id in clickedPokemon){
                continue
            }else{
                pokemonDict[pokemonId[id]] = pokemonSprite[id]
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
            clickedPokemon[clickID]=true
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
        pokemonDict = {}
        clickedPokemon = {}
    }


    return { generateNew, clickChecker, resetGame, getScore, getMaxScore, getPokeDict}
}




export default gameLogic