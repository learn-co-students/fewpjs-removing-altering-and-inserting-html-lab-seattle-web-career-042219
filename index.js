// #1
document.querySelector("main#main").remove();

// #2
let newHeader = document.createElement('h1');
newHeader.innerHTML = "Vadim is the champion";
newHeader.className = "victory";
newHeader.id = "victory";