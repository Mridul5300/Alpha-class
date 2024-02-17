// Diferent Function Reuse............
function hideElementByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElemetnById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
 

function removeBackgroundColoureByid (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function setBackgroundColoureById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}


function getElementvalueById(elementid){
    const element =document.getElementById(elementid);
    const elementValueText = element.innerText;
    const value =parseInt(elementValueText);
    return value;
}

function setElementById(elementId, value){
     const element = document.getElementById(elementId);
     element.innerText = value;
}

function textElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    // get or creat an alphabat
    const alphabatString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabatString.split('');
    // console.log(alphabates);



    const randomNumbar = Math.random() * 25;
    const index = Math.round(randomNumbar);


    const alphabate =alphabates[index] ;
    // console.log(index, alphabate);
    return alphabate;
}