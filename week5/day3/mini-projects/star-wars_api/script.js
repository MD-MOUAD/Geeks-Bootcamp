let button = document.querySelector("#button");
let names = document.querySelector("#name");
let height = document.querySelector("#height");
let gender = document.querySelector("#gender");
let birthYear = document.querySelector("#birth-year");
let homeWorld = document.querySelector("#home-world");

function getInfo() {
  updateWithLoading();

  let randomNumber = Math.floor(Math.random() * 88 + 1);
  let apiUrl = "https://www.swapi.tech/api/people/" + randomNumber + "/";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      updateInfo(data);
    })
    .catch((error) => {
      updateInfoWithError();
      console.log("There was an error:", error);
    });
}

function updateInfo(resp) {
  const character = resp.result ? resp.result.properties : resp;

  names.innerText = character.name;
  height.innerText = `Height: ${character.height}`;
  gender.innerText = `Gender: ${character.gender}`;
  birthYear.innerText = `Birth Year: ${character.birth_year}`;

  // Fetch homeworld info
  if (character.homeworld) {
    let url = new URL(character.homeworld);
    url.protocol = "https:";

    fetch(url.href)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const homeworld = data.result ? data.result.properties : data;
        homeWorld.innerText = `Home World: ${homeworld.name}`;
      })
      .catch((error) => {
        console.log("Error fetching homeworld:", error);
        homeWorld.innerText = "Home World: Unknown";
      });
  } else {
    homeWorld.innerText = "Home World: Unknown";
  }
}

function updateInfoWithError() {
  names.innerText = "Oh No! That person isn't available.";
  height.innerText = "";
  gender.innerText = "";
  birthYear.innerText = "";
  homeWorld.innerText = "";
}

function updateWithLoading() {
  names.innerHTML =
    '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = "";
  gender.innerText = "";
  birthYear.innerText = "";
  homeWorld.innerText = "";
}

button.addEventListener("click", getInfo);
