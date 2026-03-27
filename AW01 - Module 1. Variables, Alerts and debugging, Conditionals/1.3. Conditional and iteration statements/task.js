let answer;

do {
    answer = Number(prompt("Type a number"));
    if (isNaN(answer)) {
        alert("That is not a number");
    } else if (answer < 2) {
            alert("That number is too small");
        } 
} 

while   (isNaN(answer) || answer < 2);

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

/*
let answar;

while (isNaN(answar) || answar < 2) {
    answar = Number(prompt("type a number"));
    if (isNaN(answar)) {
        alert("That is not a number");
    } else if (answar < 2) {
        alert("That number is too small");
    }
}

    for (let i = 1; i <= answar; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
}
*/
