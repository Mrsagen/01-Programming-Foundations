const answar = Math.floor(Math.random() * 100) + 1;
let guess = Number(prompt("Guess a number between 1 and 100"));


while (guess != answar) {
    if (guess < answar) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }
    guess = Number(prompt("Guess a number between 1 and 100"));
}
console.log("Congratulations! You guessed the number!");    