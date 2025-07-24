
const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyMsg=document.querySelector("[data-copyMsg]");
const copyBtn=document.querySelector("[data-copy]");
const uppercaseCheck=document.querySelector('#uppercase');
const lowercaseCheck=document.querySelector('#lowercase');
const numbersCheck=document.querySelector('#numbers');
const symbolsCheck=document.querySelector('#symbols');
const indicator=document.querySelector('[data-indicator]');
const generateBtn=document.querySelector('.generateButton');
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\{|}~`;


let password="";
let passwordLength=10;
let checkCount=0;
// set strength circle to grey
setIndicator("#ccc");

handleSlider();


// slider handle
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min)) +"% 100%";
}

function setIndicator(color){
    indicator.style.backgroundColor=color;  
    // shadow to add
}

function getRndInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function geerateRandomNumber(){
    return getRndInteger(0, 9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol(){
    const randNum=getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function shufflePassword(array){
    // fisher yates method on array

}

function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNumer=false;
    let hasSymbol=false;

    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numbersCheck.checked) hasNumer=true;
    if(symbolsCheck.checked) hasSymbol=true;

    if(hasUpper && hasLower && (hasNumer || hasSymbol) && passwordLength>=8){
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper ) &&
        (hasNumer || hasSymbol) &&
        passwordLength>=6
    ){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
}

async function copyContent(){

    try{
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText="copied";
    }catch{
    copyMsg.innerText="failed";
    }
    // to make the copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);

}

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    })

    // special case
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change', handleCheckBoxChange)
})

// event listners 
inputSlider.addEventListener('input', (e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

generateBtn.addEventListener('click', ()=>{
    if(checkCount<=0) return;

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }

    // let's start the journey to find the new password


    // remove old password   
    password="";
     
    // let's put the stuff which are check by the user 
    // if(uppercaseCheck.checked){
    //     password+=generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password+=generateLowerCase();
    // }
    // if(symbolsCheck.checked()){
    //     password+=generateSymbol();
    // }
    // if(numbersCheck.checked){
    //     password+=geerateRandomNumber();
    // }

    let funArray=[];
    if(uppercaseCheck.checked){
        funArray.push(generateUpperCase);
    }
    
        if(lowercaseCheck.checked){
        funArray.push(generateLowerCase);
    }
        if(symbolsCheck.checked){
        funArray.push(generateSymbol);
    }
        if(numbersCheck.checked){
        funArray.push(geerateRandomNumber);
    }

    for(let i=0; i<passwordLength; i++){
        let randNum=getRndInteger(0, checkCount);
        let func=funArray[randNum];
        password+=func();

    }

    passwordDisplay.value=password;
    // calcStrength
    calcStrength();

})