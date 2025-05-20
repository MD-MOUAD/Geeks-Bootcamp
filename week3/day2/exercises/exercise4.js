// Copy and paste the above object to your Javascript file.
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Console.log the number of floors in the building.
console.log("Number of floors: ", building.numberOfFloors);

// Console.log how many apartments are on floors 1 and 3
const floor1 = building.numberOfAptByFloor.firstFloor;
const floor3 = building.numberOfAptByFloor.thirdFloor;
console.log("Apartments on floor 1:", floor1);
console.log("Apartments on floor 3:", floor3);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`The second tenant is ${secondTenant} and he has ${rooms} rooms.`);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
