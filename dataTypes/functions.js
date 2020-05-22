//   for (var i = 0; i < args.length; i++) {
//     //          78         78 --> nothing  56 < 78  --> true so smallestNum is assigned the new value
//     if (args[i] < smallestNumber) {
//       smallestNumber = args[i];
//     }
//   }
//   return smallestNumber;
// }
// console.log(findSmallestInt([1, 4, 6, -4])); // --> 1
// console.log([3, 4, 3].sort()[0]);

// function findSmallestInt(args) {
//   return args.sort()[0];
// }
// console.log(findSmallestInt([9, 4, 6]));
// findSmallestInt([1, 4, 6]);

// console.log((1600 / 100 + "").length);

// if the num is an integer vs a float
// if the num has 0s then just divide by 100
// let str = "testing"
// let reversedString = ""
//   for(let i = str.length-1; i >= 0;i--){
//    reversedString = reversedString + str[i]
//   }
//   console.log(reversedString)
//   return reversedString
//   Math.min(...args)
//   args.sort((a,b) =>a-b)[0]
// = assigning
// == === are for comparing two items

// Q3
//Given an arry of of first & last names (see below), write a function that returns an array of first names
// namesArr = [
//   "Patrick Francois",
//   "Mitsie Paisley",
//   "George Francais",
//   "Deboraht Neal",
// ];
// function returnFirstNames(arr) {
//   let firstNamesArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     firstNamesArr.push(arr[i].split(" ")[0]);
//   }
//   return firstNamesArr;
// }
// console.log(returnFirstNames(namesArr));
// // Q4
// // Given an array of strings write a function that returns any items that are longer than 4 letters
// let words = ['Hello', 'World', 'Pasta', 'Pizza', 'Dog', 'Cat', 'Fish', 'Jump']

// function fourLetters(arr){
//   let fourLettersArr = []
//   for(let i = 0; i < words.length; i++){
//     // words[i].length >=4 ? fourLettersArr.push(words[i]): null
//     if(words[i].length >=4){
//       fourLettersArr.push(words[i])
//     }
//   }
//   return fourLettersArr
// }
// console.log(fourLetters(words))
// // Question 5
// // Given a string write a function that removes every other letter
// function everyOtherLetter(str){
//   let newString = ""
//   for(let i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//       newString = newString + str[i]
//     }
//   }
//   return newString
// }
// console.log(everyOtherLetter("Sample"))

// Q1
// let string = "Pizza-Pizza-Give-Me-All-The-Pizza!";
// function separateByDashes(str) {
//   return str.split("-");
// }
// console.log(separateByDashes(string));
// // Q2
// let arr = ["I", "Can", "Not", "Wait", "For", "Warm", "Weather!"];
// function joinArray(array) {
//   return array.join("");
// }
// console.log(joinArray(arr));
// // Q3

// let str = "I-Love-To-Code!"
// function removeDashes(string){
//   return string.split("-").join("")
// }
// console.log(removeDashes(str))
