// 🌟 Exercise 4 : Vacations Costs

const hotelCost = (nights) => {
  return 140 * nights;
};

const planeRideCost = (destination) => {
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
};

const rentalCarCost = (days) => {
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
};

const totalVacationCost = () => {
  let nights = Number(prompt("How many nights at hotel?"));
  while (isNaN(nights) || nights === 0) {
    nights = Number(prompt("Enter a valid number of nights:"));
  }

  let destination = prompt("Enter destination:");
  while (!destination || typeof destination !== "string") {
    destination = prompt("Please enter a valid destination:");
  }

  let days = Number(prompt("How many days car rental?"));
  while (isNaN(days) || days <= 0) {
    days = Number(prompt("Enter a valid number of days:"));
  }

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  const result = `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`;
  console.log(result);
  document.getElementById("result").innerHTML = result;
  return hotel + plane + car;
};
