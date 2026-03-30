//introduction to functions
/*
function getValidNumber() {

    let input = prompt("Enter a number:");
    let number = Number(input);

    while (isNaN(number)) {
        input = prompt("That’s not a number. Try again:");
        number = Number(input);
    }
    return number;
}

const userNumber = getValidNumber();
console.log("You entered:", userNumber);

//function parameters

function greetUsers(name) {
    console.log(`Hello, ${name}!`);
        }

function greetManyUsers(...names) {
    for (const name of names) {
        greetUsers(name);
    }
}

greetManyUsers("Ola", "kari", "knut");


//Functions as values

function shoutHello() {
    console.log("HELLO!");
}

const whisperHello = function() {
    console.log("hello...");
}

shoutHello();
whisperHello();

let saySomething = shoutHello;

saySomething();

saySomething = whisperHello;
saySomething();

*/

// Arrow functions

