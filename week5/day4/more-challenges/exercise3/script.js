import { getNextHoliday, getNextHolidayFromAPI } from "./date.js";

console.log("--- Hardcoded Holidays ---");
const holidayInfo = getNextHoliday();
console.log(`Today: ${holidayInfo.today}`);
console.log(
  `Next holiday (${holidayInfo.nextHoliday}) is in ${holidayInfo.timeLeft}`
);

// Bonus:
console.log("\n--- API Holidays ---");
getNextHolidayFromAPI().then((info) => {
  console.log(`Today: ${info.today}`);
  console.log(`Next holiday (${info.nextHoliday}) is in ${info.timeLeft}`);
});
