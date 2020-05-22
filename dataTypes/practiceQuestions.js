// level 0
// create and invoke a "hello world" function that will always say hello world
function helloWorld() {
  return "hello world";
}
helloWorld();
// level 1
// Q1:
// create and invoke a function that takes in a name and produces hello + givenName + !
// input: 'Nic'
// output: Hello Nic!
function greeting(name) {
  return `Hello ${name}!`;
}
greeting("Ron");
// Q2:
// create a function that takes in one number and doubles it
function doubleNum(num) {
  return num * 2;
}
// Q3:
// create a function that takes in a number and triples it
function TrupleNum(num) {
  return num * 3;
}
// level 2
// Q1:
// create a function that takes in a number and tells us if it is divisible by 2
// requires an if statement
function divisibleByTwo(num) {
  return num % 2 === 0;
}
// Q2:
// create and invoke a function that takes in a first and last name and produces hello + firstName
function hello(fname, lname) {
  let firstName = fname + " " + lname;
  return `Hello ${firstName}`;
}
// level 3:
// Q1:
// create a function that takes in a number and tells us if it is divisible by both 2 & 3
// requires an if statement
// function divideBy(num) {
//   return num % 2 === 0 && num % 3 === 0;
// }
// function divideBy(num) {

//   if(num % 2 === 0 && num % 3 === 0){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(divideBy(4))
// console.log(divideBy(2))
// console.log(divideBy(6))
// level 4:
// Q1:
// create a function that returns an array of all the smaller positive numbers that are divisible by either 2 or 3
// requires an if statement
// let arr = [3, 5, 4, 32, 300, 732, -2, 30];
// n is the limiter
// will only check numbers less than n
// function divideHard(numsArr, n) {
//   let newArr = [];
//   for (let i = 0; i < numsArr.length; i++) {
//     if (numsArr[i] > 0 && numsArr[i] < n) {
//       numsArr[i] % 2 === 0 || numsArr[i] % 3 === 0
//         ? newArr.push(numsArr[i])
//         : null;
//     }
//   }
//   return newArr;
// }
// console.log(divideHard(arr, 731));

// function divideHard2(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     i % 2 === 0 || i % 3 === 0 ? arr.push(i) : null;
//   }
//   return arr;
// }
// console.log(divideHard2(10));
// let name = "ron";
// const name2 = "Mike";
// function testing() {
//   return name;
// }
// console.log(testing());

// push -> adds element to end of Array
// arr.push(ele)
// indexOf -> returns index of specified element
// arr.indexOf(ele) --> returns a number(index) -1 if not found
// slice --> cuts portion of a string/array given a starting position and ending position
// string.slice(0,3) arr.slice(0,3) --> will cut including 0 position to 2nd position, 3 is exclusive
// length --> will return number of elements inside an array. will return number of chars in string
// arr.length || string.length
// replace -> will replace an element with another element on a string
// "zast".replace("z","f") --> "fast"
// unshift -> will add an element to beginning of array
// arr.unshift(elem)
// shift --> will mutate the arr by removing the first element from the array
// arr.shift()
// pop --> will mutate the arr by removing the last element from the array
// arr.pop()
// join --> will join the array specified by the argument passed, turning array into string
// arr.join("") --> string
// splice --> will inject an element or elements into specified position, can be used to replace elements in array
// arr.splice(0,2,"hey") -> position one "hey" will be inserted, delete the first 2 elements inside array
// toUpperCase -> capitalizes all the chars inside string
// str.toUpperCase()
// toLowerCase -> lowercase all the chars inside string
// str.toLowerCase()

// Solves this re declaration problem
// var greeting = "str"
// var greeting = "sd"
// let greeting = "hi"
// let greeting = "Hii"

// Solves hoisting problem
// console.log(str)
// let str = "add"

// function testing(){

// }

// Whats the goal? whats going to do? whats it for? 
// write a function that multiplies a given number by 2

// var str = 54
// what the function is going to do
// say the whole process, the building process of the actuall function
// function multiplyByTwo(num){
//   return num*2
// }
// console.log(multiplyByTwo(4)) 
// const str1 = ("1","2","3")
// console.log(str1)
// let a = 0
// function hoist(){
//   a = 20
//   return a
// }













