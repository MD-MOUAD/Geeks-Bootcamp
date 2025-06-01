// 🌟 Exercise 5 : Users

// 1 - Retrieve the div and console.log it
const div = document.getElementById("container");
console.log(div);

// 2- Change the name “Pete” to “Richard”.
const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// Delete 2nd li of 2nd ul
lists[1].removeChild(lists[1].children[1]);

// Change first li of each ul to Mouad
for (let ul of lists) {
  ul.firstElementChild.textContent = "Mouad";
}

// Add class student_list to both ul
for (let ul of lists) {
  ul.classList.add("student_list");
}

// Add classes university and attendance to first ul
lists[0].classList.add("university", "attendance");

// Style div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide li with text "Dan"
for (let li of lists[0].children) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// Add border to li "Richard"
for (let li of lists[0].children) {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
}

// Change font size of body
document.body.style.fontSize = "2rem";

// Bonus
if (div.style.backgroundColor === "lightblue") {
  const names = [];
  for (let li of lists[0].children) {
    names.push(li.textContent);
  }
  alert(`Hello ${names.join(" and ")}`);
}
