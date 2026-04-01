//introduction to functions
// ----------------------------

// function getValidNumber() {

//     let input = prompt("Enter a number:");
//     let number = Number(input);

//     while (isNaN(number)) {
//         input = prompt("That’s not a number. Try again:");
//         number = Number(input);
//     }
//     return number;
// }

// const userNumber = getValidNumber();
// console.log("You entered:", userNumber);

//function parameters
// ----------------------------

// function greetUsers(name) {
//     console.log(`Hello, ${name}!`);
//         }

// function greetManyUsers(...names) {
//     for (const name of names) {
//         greetUsers(name);
//     }
// }

// greetManyUsers("Ola", "kari", "knut");


//Functions as values
// ----------------------------

// function shoutHello() {
//     console.log("HELLO!");
// }

// const whisperHello = function() {
//     console.log("hello...");
// }

// shoutHello();
// whisperHello();

// let saySomething = shoutHello;

// saySomething();

// saySomething = whisperHello;
// saySomething();



// Arrow functions
// ----------------------------

// function performOnEach(numbers, operation) {
//     const results = [];

//     for (const num of numbers) {
//         results.push(operation(num));
//     }
//     return results;
// }

// console.log(performOnEach([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
// console.log(performOnEach([1, 2, 3], (num) => num / 2)); // [0.5, 1, 1.5]
// console.log(performOnEach([1, 2, 3], (num) => num ** 2)); // [1, 4, 9]
// console.log(performOnEach([1, 2, 3], (num) => -num)); // [-1, -2, -3]

function sayHello() {
   console.log("Hello there!.");
}

const button = document.getElementById("goodbyeBtn");

button.addEventListener("click", () => {
   console.log("goodbye!");
});