// analog system..............
// function play(){
//     // console.log('play start');
// const homePart = document.getElementById('home-screen');
// homePart.classList.add('hidden');


// const playPart = document.getElementById('play-ground');
// playPart.classList.remove('hidden')
// // console.log(playPart.classList);
// }
function continueGame(){
        const alphabate = getRandomAlphabet();
        console.log ('your random alphabet', alphabate);


        const startAlphabate = document.getElementById('current-alphabat');
         startAlphabate.innerText = alphabate;


         setBackgroundColoureById(alphabate);
}

//functonal system.............. 
function play(){
    hideElementByid('home-screen');
    showElemetnById('play-ground');
    continueGame();
}