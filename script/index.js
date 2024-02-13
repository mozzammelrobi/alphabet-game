// function play(){
//     /**
//      * step-1: hide the home screen. To hide the screen add the hidden class to the home section.
//      * step-2: show the playgroun. 
//      */
//     // step-1
//     const homesection = document.getElementById('home-screen')
//     homesection.classList.add('hidden')

//     // step-2
//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
//     // console.log(playground.classList)
// }


function continueGame(){
    // step-1: generate a randome alphabet
    const alphabet = getARandomAlphabet()
    console.log('random alphabet', alphabet)
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}

