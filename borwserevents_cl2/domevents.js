

document.addEventListener("click", function(event) {
    console.log("Click event detected:", event);
});

// const anchor = document.querySelector("a");
// anchor.addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default action of the anchor tag
//     console.log("Anchor clicked, but default action prevented.");
// });


// created a div with 10 paragraphs
// each paragraph has a click event listener that logs the paragraph text to the console
// this is a simple example of how to use DOM events in JavaScript
let myDiv=document.createElement("div");

for(let i=0;i<10;i++){
    let p=document.createElement("p");
    p.innerText="This is paragraph "+i;
    p.addEventListener("click", function(event) {
        console.log("Paragraph clicked:", event.target.innerText);
    });
    myDiv.appendChild(p);
}

document.body.appendChild(myDiv);


// Adding a click event listener to the last paragraph
let lastPara = document.querySelector(".lastPara");
lastPara.addEventListener("click", function(event) {
    if(event.target.nodeName === "SPAN") {
        console.log("Span inside last paragraph clicked:", event.target.innerText);
    }
    // console.log("Last paragraph clicked:", event.target.innerText);
});