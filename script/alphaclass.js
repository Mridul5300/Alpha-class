// analog system..............
// function play(){
//     // console.log('play start');
// const homePart = document.getElementById('home-screen');
// homePart.classList.add('hidden');


// const playPart = document.getElementById('play-ground');
// playPart.classList.remove('hidden')
// // console.log(playPart.classList);
// }
function handleKeybordButtonPressed(event){
    const gamerPresed = event.key;
    // console.log('tipo tipo', gamerPresed);

    // get the expected to press
    const currentAlphabteElement = document.getElementById('current-alphabat');
    const targetAlphabate = currentAlphabteElement.innerText
    const expectedAlphabate = targetAlphabate.toLowerCase();
    // console.log(gamerPresed,expectedAlphabate);
    if(gamerPresed === 'Escap'){
        gameOver();
    }

    // check macht
    if(gamerPresed ===  expectedAlphabate){
        // console.log('you win one point');
        // console.log('you have pressed corectly', expectedAlphabate);

        const currentScore = getElementvalueById('cureent score');
        const updateScore = currentScore + 1;

        setElementById('cureent score', updateScore);





        // ...............................
    //     // update score...... 
    //     const currentScoreElement = document.getElementById('cureent score');
    //     const currentScoreTex = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreTex)
    //     // console.log(currentScoreTex);

    //     const newScore = currentScore + 1;

    // // update score
    // currentScoreElement.innerText= newScore

        // start a new game
        removeBackgroundColoureByid(expectedAlphabate)
        continueGame();
    }
    else{
       
          
        const currentLife = getElementvalueById('curent-life');
        const updateLife = currentLife - 1; 
        setElementById('curent-life', updateLife);

        if (updateLife === 0){
            gameOver();
        }

        // ...........................
        // const currentLifeElement = document.getElementById('curent-life');
        // const curentLifeTex = currentLifeElement.innerText;
        // const  currentLife = parseInt(curentLifeTex);

        // // count life
        // const newLife = currentLife - 1

        // // update score
        // currentLifeElement.innerText = newLife
    }
}

document.addEventListener('keyup', handleKeybordButtonPressed)

function continueGame(){
        const alphabate = getRandomAlphabet();
        // console.log ('your random alphabet', alphabate);


        const startAlphabate = document.getElementById('current-alphabat');
         startAlphabate.innerText = alphabate;


         setBackgroundColoureById(alphabate);
}

//functonal system.............. 
function play(){
    // hide everything only playground
    hideElementByid('home-screen');
    hideElementByid('final-scorl');
    showElemetnById('play-ground');

    // reset score
    setElementById ('curent-life', 5);
    getElementvalueById('cureent score', 0)

    continueGame();
}
function gameOver(){
    hideElementByid ('play-ground');
    showElemetnById ('final-scorl');
    // update score
    const lastScore =  getElementvalueById('cureent score');
    setElementById('game-score', lastScore);

    // clear last selected 
        const currentAlphabat =  textElementById('current-alphabat');
        removeBackgroundColoureByid(currentAlphabat);
}