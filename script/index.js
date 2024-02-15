// function play(){
//     // step -1: hide home screen adding hidden class 
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')  

//     // show the play ground section
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPrerss(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameover()
    }

    // expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,  expectedAlphabet)

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point')

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;    
        // console.log(updatedScore)
        setTextElementValueById('current-score', updatedScore)

        // -----------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScore)
        // //2. Increase the score by 1
        // newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }else{
        // console.log('u press wrong key')
        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife == 0){
           gameover()
        }
        // -----------------------------------------------------
        // step 1. get the current life 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step 2. reduce the life score
        // const newLife = currentLife - 1;
        // // step 3. display the current life update
        // currentLifeElement.innerText = newLife

    }

 }
document.addEventListener('keyup', handleKeyboardButtonPrerss )

function continueGame() {
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet is =',alphabet)
   
    // set random generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    // set background color
    setBackgroundColorById(alphabet)
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    // reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameover(){
    hideElementById('play-ground')
    showElementById('final-score')
    // updete final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore)
    setTextElementValueById('last-score', lastScore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}