// 1 - Retrieve the h1 and console.log it.
const h1 = document.querySelector("h1");
console.log(h1);

// 2 - Remove last paragraph in the <article> tag.
const article = document.querySelector("article");
article.lastElementChild.remove();

// 3 - Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// 4 - h3 click to hide
const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// 5 - Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.fontWeight = "bold";
  });
});

// BONUS: h1 random font size on hover
h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 100) + "px";
  h1.style.fontSize = randomSize;
});

// BONUS: fade out 2nd paragraph
const secondP = document.querySelectorAll("p")[1];
secondP.style.transition = "opacity 1s";
secondP.addEventListener("mouseover", () => {
  secondP.style.opacity = 0;
});
