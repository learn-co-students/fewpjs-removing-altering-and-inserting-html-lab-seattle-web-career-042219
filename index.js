// Write your code here!

document.querySelector('#main').remove();

var newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
