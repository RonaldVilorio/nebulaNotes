// level 0
// Q0.1 create a function that always greets us ( Hello World Function )
// example:
// no input
// output: "Hello!"
function greet() {
  return "Hello!";
}

// level 1:
// Q1.1
// Create a function that takes in a string and returns the second character
function returnCharTwo(str) {
  return str[1];
}
// Q1.2
// Create a function that takes in an array and returns the second element
function eleTwo(arr) {
  return arr[1];
}
// Q1.3
// Create a function that takes in an array of birds and adds three birds
// the birds get added one to the front, one to the back, and one at the second index
function addBirds(arr) {
  arr.unshift("bird1");
  arr.push("bird2");
  arr.splice(2, 0, "bird3");
  return arr;
}
// let initialBirds = ['Bald Eagle', 'Robin', 'Blue Jay'];
// let bird1 = 'Quaker';
// let bird2 = 'Cockatoo';
// let bird3 = 'Kingfisher';

// Q1.4
// Create a function that takes in a string and gives us the first three letters
function threeChars(str) {
  return str.slice(0, 3);
}
// Q1.5
// Create a function that takes in an array and combines the elements into a string
function combine(arr) {
  return arr.join("");
}
// level 2:
// Q2.1
// Create a function that takes in a string and returns the last character
function lastChar(str) {
  return str[str.length - 1];
}
// Q2.2
// Create a function that takes in an array and returns the last element
function lastEle(arr) {
  return arr[arr.length - 1];
}
// level 3:
// Q3.1
// Create a function that takes in a string and returns the central character
function centerChar(str) {
  return str[Math.floor((str.length - 1) / 2)];
}
// Q3.1
// Create a function that takes in an array and returns the central element
function centerCharArr(arr) {
  return arr[Math.floor((arr.length - 1) / 2)];
}
// console.log(centerCharArr([1,3,4,2]))

// level 4:
// Create a function that searches for all numbers inside strings in a given array and removes them
// input = ['B12', 'RTX3000', 'Hello World', 'H3110 W041D']
// output = ['B', 'RTX', 'Hello World', 'HWD']

// let str = "B12";
// let newString = "";
// console.log(Boolean(str[1] * 1));
// for (let i = 0; i < str.length; i++) {
//   if (str[i] * 1) {
//     null;
//   } else {
//     newString = newString + str[i];
//   }
// }
function removeNums(arr) {
  let str = arr.join("-");

  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] * 1 || str[i] === "0") {
      null;
    } else {
      newString = newString + str[i];
    }
  }
  let newArr = newString.split("-");
  //   let newValue = newArr[newArr.length - 1].replace(" ", "");
  //   newArr.splice(newArr.length - 1, 1, newValue);
  return newArr;
}

console.log(removeNums(["B12", "RTX3000", "Hello World", "H3110 W041D"]));

// Javascript does 2 scans
// The first scan is looking for the keywords var and function to hoist them(pull them to the top of their scope or environment)
// variables are partially hoisted which means js looks at the var key and identifier and auto assigns undefined to it.
// functions are fully hoisted so before the second scan starts, function definitions are already stored in memory
// js does the second scan and will go line by line through the code with var and functions already partially or fully hoisted

// Scope is the environment in which datatypes live in
// ex: function scope, block scope --> if, for statements
// the start of a new scope is identified by the {} brackets
// the let and const key words were made to combat the issues that the var keyword had with scope
// with var you could redeclare variables in the same scope without getting any errors
// const and let key words fix the above

// function testing() {
//   var name = "str1";
//   function testing2() {
//     var name = "str2";
//     return name;
//   }
//   console.log(testing2());
//   return name;
// }
// console.log(testing());
