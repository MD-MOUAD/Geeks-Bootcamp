const form = document.querySelector("form");
console.log(form);

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log(fnameInput, lnameInput);

const nameInputs = document.getElementsByName("firstname");
console.log(nameInputs);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // to prevent page from reload

  const fname = fnameInput.value.trim();
  const lname = lnameInput.value.trim();

  if (fname && lname) {
    const ul = document.querySelector(".usersAnswer");
    ul.innerHTML = ""; // clear previous

    const li1 = document.createElement("li");
    li1.textContent = fname;
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = lname;
    ul.appendChild(li2);
  }
});
