// Constante contendo um array de emojis.
const emojis = ["😀","😀","🤡","🤡","😈","😈","😭","😭","👨🏻‍💻","👨🏻‍💻","😱","😱","🤩","🤩","😍","😍"];
// 
let openCards = [];

// Variavel para embaralhar os emojis. 
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1)); 

// 
for(let i=0; i < emojis.length; i++){
    // Create div element
    let box = document.createElement("div");
    //Create class item
    box.className = "item";
    // change content class item 
    box.innerHTML = shuffleEmojis[i];
    // Select class game and add variable box 
    document.querySelector(".game").appendChild(box)
}