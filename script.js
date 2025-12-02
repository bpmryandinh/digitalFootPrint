// 12/2/25 lecture




const pizzaSauce = document.getElementById('pizzaSauce');
console.log(pizzaSauce);

const div = document.createElement('div');
div.classList.add("container");

const p = document.createElement('p');
p.style = "color: red"; 
p.innerText = "Hey I'm red";

console.h3 = document.createElement(h3);
h3.style = "color: blue";
h3.innerText = "I'm a blue h3!";

const insideDiv = document.createElement('div');

const h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

const p2 = document.createElement('p');
p2.innerText = "ME TOO!";

console.log("new version");
pizzaSauce.appendChild(div);
div.appendChild(p);
div.appendChild(h3);
div.appendChild(insideDiv);
insideDiv.appendChild(h1);
insideDiv.appendChild(p);