const name = prompt("What is your name?");
alert("nice to meet you " + name + "!");

const math1 = prompt("what is (2+2)?");
const math2 = prompt("what is (5*5)?");

const math1Num = Number(math1);
const math2Num = Number(math2);


console.log("Here are your answers: " + name);
console.log("You answered: 2+2 = " + math1Num);
console.log("Type of your answer is: " + typeof math1Num);
console.log("correct? " + (math1Num === 4));

console.log("You answered: 5*5 = " + math2Num); 
console.log("Type of your answer is: " + typeof math2Num);
console.log("correct? " + (math2Num === 25));