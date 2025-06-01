let allBoldItems;

// collect all bold items in the paragraph
const getBoldItems = () => {
  allBoldItems = document.querySelectorAll("p strong");
};

// Highlight bold items in blue
const highlight = () => {
  allBoldItems.forEach((item) => (item.style.color = "blue"));
};

// Revert bold items to black
const returnItemsToDefault = () => {
  allBoldItems.forEach((item) => (item.style.color = "black"));
};

getBoldItems();

// Add event listeners to the paragraph
const paragraph = document.querySelector("p");

paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
