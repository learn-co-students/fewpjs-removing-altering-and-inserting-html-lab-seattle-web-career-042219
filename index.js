// Write your code here!
const name = "Jens Vyff"

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.className = "victory";
newHeader.id = "victory";
newHeader.innerHTML = "${name} is the champion";