
// adding 100 paragraphs to the body
// let t1= performance.now();
// for(let i=0; i<100; i++) {
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is paragraph " + i;
    
//     document.body.appendChild(newElement);
// }
// let t2= performance.now();
// console.log("Time taken to add 100 paragraphs: " + (t2 - t1) + " milliseconds");

// doing little performance optimization

let myDiv= document.createElement("div");

// using a single appendChild to add all paragraphs at once

let t1= performance.now();
for(let i=0; i<100; i++) {
    let element= document.createElement("p");
    element.textContent = "This is paragraph " + i; 

    myDiv.appendChild(element);
}
    document.body.appendChild(myDiv);
let t2= performance.now();
console.log("Time taken to add 100 paragraphs: " + (t2 - t1) + " milliseconds");


// fragment optimization    
let myFragment= document.createDocumentFragment();
for(let i=0; i<100; i++) {
    let element= document.createElement("p");
    element.textContent = "This is paragraph " + i; 

    myFragment.appendChild(element);
}

document.body.appendChild(myFragment); // 1 reflow, 1 repaint


// js is single threaded, so it can only do one thing at a time

function addPara(){
    let element=document.createElement("p");
    element.textContent = "This is a new paragraph";
    document.body.appendChild(element);
}

function appendNewMessage(){
    let element=document.createElement("p");
    element.textContent = "This is a new message";
    document.body.appendChild(element);
}

addPara();
appendNewMessage(); //synchronous, so it will wait for addPara to finish before executing
// run to completion nature of js
