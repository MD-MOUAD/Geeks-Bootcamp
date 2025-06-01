const colors = [
  "red",
  "orangered",
  "orange",
  "yellow",
  "yellowgreen",
  "lightgreen",
  "green",
  "turquoise",
  "cyan",
  "lightskyblue",
  "dodgerblue",
  "blue",
  "darkblue",
  "indigo",
  "darkmagenta",
  "violet",
  "lightpink",
  "lightgray",
  "gray",
  "black",
  "white",
];

let selectedColor = null;
let isPainting = false;

const sidebar = document.getElementById("sidebar");
const mainGrid = document.getElementById("mainGrid");
const clearBtn = document.getElementById("clear-btn");

colors.forEach((color) => {
  const colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = color;
  colorDiv.style.border = "1px black solid";
  colorDiv.addEventListener("click", (e) => {
    selectedColor = e.target.style.backgroundColor;
  });

  sidebar.appendChild(colorDiv);
});

for (let i = 0; i < 1440; i++) {
  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.border = "1px solid lightgray";

  box.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (selectedColor != null) {
      box.style.backgroundColor = selectedColor;
      isPainting = true;
    }
  });

  box.addEventListener("mouseover", () => {
    if (isPainting && selectedColor != null) {
      box.style.backgroundColor = selectedColor;
    }
  });

  mainGrid.appendChild(box);
}

document.addEventListener("mouseup", () => {
  isPainting = false;
});

const boxes = mainGrid.querySelectorAll("div");

clearBtn.addEventListener("click", () => {
  selectedColor = null;
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});
