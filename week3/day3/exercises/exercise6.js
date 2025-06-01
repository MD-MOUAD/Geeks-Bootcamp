// 🌟 Exercise 6 : Change the navbar

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const ul = nav.querySelector("ul");

const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);
ul.appendChild(newLi);

console.log("First li text:", ul.firstElementChild.textContent);
console.log("Last li text:", ul.lastElementChild.textContent);
