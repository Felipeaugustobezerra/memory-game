// Const containing an array of emojis.
const emojis = ["😀","😀","🤡","🤡","😈","😈","😭","😭","👨🏻‍💻","👨🏻‍💻","😱","😱","🤩","🤩","😍","😍"]; 
//Save card positions
let openCards = [];
//Variable to shuffle the emojis.  
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1)); 

// 
for(let i=0; i < emojis.length; i++){
    // Create div element
    let box = document.createElement("div");
    //Create class item
    box.className = "item";
    // Change content class item 
    box.innerHTML = shuffleEmojis[i];
    // 
    box.onclick = handleClick;
    // Select class game and add variable box 
    document.querySelector(".game").appendChild(box)
}
// function for click
function handleClick() {
    // check if only 2 cards is open
    if(openCards.length < 2 ){
        this.classList.add("boxOpen");
        //Ao clicar na carta salva nesse array
        openCards.push(this);
    }
    //checks if a pair of cards are open
    if(openCards.length == 2) {
        setTimeout(checkMatch,500);
    }
}
//function victory
function checkMatch() {
    //Check if the cards are the same
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        //if the cards are the same, add the BoxMatch class
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        //If they are not the same, remove the boxOpen class
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    //clearing the cards matrix vector
    openCards = [];
    //checks if all cards are open
    if(document.querySelectorAll(".boxMatch").length == emojis.length){
        alert("Voce Venceu !");
    }
}