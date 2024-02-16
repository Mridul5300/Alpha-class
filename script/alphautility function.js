// Diferent Function Reuse............
function hideElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElemetnById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
 

function addBackgroundColoureByid (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColoureById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}


function getRandomAlphabet(){
    // get or creat an alphabat
    const alphabatString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabatString.split('');
    console.log(alphabates);



    const randomNumbar = Math.random() * 25;
    const index = Math.round(randomNumbar);


    const alphabate =alphabates[index] ;
    // console.log(index, alphabate);
    return alphabate;
}