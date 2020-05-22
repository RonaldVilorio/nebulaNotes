// let personObj = {
//   name: "Ronald",
//   interests: ["Soccer", "Coding", "Gaming"],
//   age: 25,
//   consoleName: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };
// personObj.lastName = "sil";
// personObj.name = "Ron";
// personObj["email"] = "soccer23415";
// console.log(personObj);
// // console.log(personObj);
// // Practice 1:
// // Task 1: Creating an object
// // Create an object called car
// // Give it 5 key value pairs including; color, numberOfWheels, and brand.

// // Task 2: Changing Stuff
// // Using dot notation
// // 2a: Change the color

// // Task 3: Adding Stuff
// // Add numberOfSeats
// // Add licensePlate
// // End of practice one
// //______________________________________________________________________________________________________________

// //Practice 2

// // Task 1:
// // Create 3 car objects with 3 properties; color, numberOfWheels, and brand.
// // Task 2:
// // Iterate through the cars and do the following tasks
// // Change the color
// // Add numberOfSeats
// // Add licensePlate
// // (Difficult) Make each one unique

// let car = {
//   color: "red",
//   numberOfTires: 4,
//   brand: "Acura",
//   sunRoof: true,
//   tireColor: "blue",
// };
// car.color = "green";
// car.numberOfSeats = 4;

// let car1 = {
//   color: "blue",
//   numberOfWheels: 4,
//   brand: "Acura",
// };
// let car2 = {
//   color: "green",
//   numberOfWheels: 4,
//   brand: "Bmw",
// };
// let car3 = {
//   color: "yellow",
//   numberOfWheels: 4,
//   brand: "Toyota",
// };
// var carsObjs = [car1, car2, car3];
// // console.log(carObjs);
// for (var i = 0; i < carsObjs.length; i++) {
//   if (i % 2 === 0) {
//     carsObjs[i].color = "black";
//     carsObjs[i].numberOfSeats = 5;
//   } else if (i % 2 !== 0) {
//     carsObjs[i].color = "yellow";
//     carsObjs[i].numberOfSeats = 6;
//   }
// }
// console.log(carsObjs);

// Q1 T1
let sport = {
  name: "soccer",
  playerNum: 6,
  requiredItems: ["soccer ball"],
};
// T2 A
sport.requiredItems.push("cleats");
// T2 B
sport.playerNum++;

// Q2 T1
let house = {
  size: 2600,
  county: "Suffolk",
  floors: 4,
};
// T2 A
house.size = 3000;
// T2 B
house.increaseFloors = function () {
  this.floors++;
};
house.increaseFloors();
// T3
house.numberOfAdults = 4;
house.numberOfKids = 3;
// T4
house.totalCost = (house.numberOfAdults + house.numberOfKids) * 10 * house.size;
// console.log(house);
console.log();
