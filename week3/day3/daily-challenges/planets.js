const { cos, sin, PI } = Math;

const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "goldenrod", moons: 0 },
  { name: "Earth", color: "dodgerblue", moons: 1 },
  { name: "Mars", color: "orangered", moons: 2 },
  { name: "Jupiter", color: "peru", moons: 5 },
  { name: "Saturn", color: "khaki", moons: 3 },
  { name: "Uranus", color: "lightseagreen", moons: 2 },
  { name: "Neptune", color: "royalblue", moons: 4 },
];

const section = document.querySelector(".listPlanets");

section.style.height = "80vh";
section.style.display = "flex";
section.style.flexWrap = "wrap";
section.style.alignItems = "center";
section.style.justifyContent = "center";
section.style.gap = "200px";

planets.forEach((planet) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  const radius = 70;
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    const angle = (360 / planet.moons) * i;
    const radian = angle * (PI / 180);

    const x = 50 + radius * cos(radian);
    const y = 50 + radius * sin(radian);

    // Position moon
    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
