`// // Q1 Create a loop that greets us 5 times!
// for (var i = 0; i < 5; i++) {
//   console.log("Hi!");
// }
// // Q2 : Create a loop which tells us what loop number it is on
// for (var i = 0; i < 5; i++) {
//  
// }
// // Q3 Loop over the following array and console.log the current index value

// // ['Zeus', 'Hades', 'Hermies', 'Poseidon']
// var arr = ["Zeus", "Hades", "Hermies", "Poseidon"];
// for (var index = 0; index < arr.length; index++) {
//     index = 0
//     index = 1
//                     1
//   console.log(arr[index]);

// }//
// First iteration index = 0
// run console.log and print out Zeus
// at Line 18 it will return to the for loop and restart process/loop

// Second Iteration, index++ --> index = 1

// repeat until the condition is no longer true, index < arr.length

// // // Q4: Loop over the following array and log to the CLI an array that has each word without any vowels
// // // ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

// // // -> I first tested a single string with regex
// console.log("Apple".replace(/[aeiou]/gi, ""));
// // // Solution 1
// var fruitArray = ["Apple", "Banana", "Orange", "Peach", "Strawberry", "Plum"];

// var updatedFruitArray = [];

// for (var i = 0; i < fruitArray.length; i++) {
//   updatedFruitArray.push(fruitArray[i].replace(/[aeiou]/gi, ""));
// }
// console.log(updatedFruitArray);
// // Q5 optional
// // Q5: Loop over the following array and log to the CLI each word without any vowels
// //UNLESS the vowel is the first letter of the word
// // - ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
// // - Output: ['Appl', 'Bnn', 'Orng', 'Pch', 'Strwbrry', 'Plm'];

// // break it down to a single item to work with
// //var string = "Apple";
// //console.log(string[0] + string.slice(1, string.length));
// var updatedFruitArray2 = [];
// for (var i = 0; i < fruitArray.length; i++) {
//   updatedFruitArray2.push(
//     fruitArray[i][0] +
//       fruitArray[i].slice(1, fruitArray[i].length).replace(/[aeiou]/gi, "")
//   );
// }
// console.log(updatedFruitArray2);

//Intermediate

// Iterate over a string & return all vowels
var string = "soccer";
var vowelsArr = [];

for (var i = 0; i < string.length; i++) {
  if (string[i] === "a") {
    vowelsArr.push(string[i]);
  }
  if (string[i] === "e") {
    vowelsArr.push(string[i]);
  }
  if (string[i] === "i") {
    vowelsArr.push(string[i]);
  }
  if (string[i] === "o") {
    vowelsArr.push(string[i]);
  }
  if (string[i] === "u") {
    vowelsArr.push(string[i]);
  }
}
// console.log(vowelsArr);

// Iterate over a string & make every other letter capital
var name = "ronald";
var arr = [];
// % modular %2 index to get even and odd
for (var i = 0; i < name.length; i++) {
  if (i % 2 === 0) {
    arr.push(name[i].toUpperCase());
  } else if (i % 2 !== 0) {
    arr.push(name[i].toLowerCase());
  }
  //   i % 2 === 0 ? arr.push(name[i].toUpperCase()) : arr.push(name[i].toLowerCase());
}
console.log(arr.join(""));

// Iterate over an array & log any word that has the letter 'e' in it

arr2 = ["bat", "mean", "sell", "rat"];

for (var i = 0; i < arr2.length; i++) {
  arr2[i].includes("e") ? console.log(arr2[i]) : null;
}

//Advanced

// Iterate over the sentence 'Peter piper picked a pickled pepper' &
// create a new string which has only the words with the letter 'i' in it.

peterString = "Peter piper picked a pickled pepper";
peterArr = peterString.split(" ");
arr3 = [];
for (var i = 0; i < peterArr.length; i++) {
  if (peterArr[i].includes("i")) {
    arr3.push(peterArr[i]);
  }
}
var newPeterString = arr3.join(" ");
console.log(newPeterString);

//Iterate over a string and log the string backwards
//  Examples:
//          - 'this' => 'siht'
//          - 'test' => 'tset'
//          - 'Pizza' => 'azziP'
var string3 = "this";

for (var i = string3.length; i >= 0; i--) {
  console.log(string3[i]);
}
