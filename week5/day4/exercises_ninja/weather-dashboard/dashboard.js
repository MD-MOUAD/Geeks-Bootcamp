import readline from "readline/promises";
import { getWeather } from "./weather.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function startDashboard() {
  while (true) {
    const city = await rl.question('Enter a city name (or "exit" to quit): ');
    if (city.toLowerCase() === "exit") break;
    await getWeather(city);
  }
  rl.close();
}
