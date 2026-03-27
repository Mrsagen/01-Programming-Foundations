// oppgave 1. Input-validering (if / while / do...while)



/*
let answar;

do {
    answar = prompt("hvor gammel er du?");
    answar = Number(answar);
    if (isNaN(answar)) {
        alert("det er ikke et nummer");
    } else if (answar < 0) {
        alert("det er ikke en gyldig alder");
    }   else if (answar > 120) {
        alert("det er ikke en gyldig alder");
    }
} 

while (isNaN(answar) || answar < 0 || answar > 120);
*/

// 2. Ternary + if/else (beslutningslogikk)
/*
let answar;

answar = Number(prompt("type a number"));


if (answar > 0) {
    console.log("positiv");
} else if (answar < 0) {
    console.log("negativ");
} else {
    console.log("zero");
}

console.log(
    answar > 0 ? "positiv" : 
    answar < 0 ? "negativ" : 
    "zero"
);
*/

let saldo;

saldo = Number(prompt("hvor mye penger har du?"));
let valg = Number(prompt("1: se saldo\n 2: sett inn\n 3: ta ut"));
switch (valg) {
    case 1:
        console.log("du har " + (saldo) + " kroner");
        break;

    case 2:
        saldo = saldo += Number(prompt("hvor mye penger setter du inn?"));
        console.log("du har nå " + (saldo) + " kroner");
        break;

    case 3:
        saldo = saldo -= Number(prompt("hvor mye penger tar du ut?"));
        console.log("du har nå " + (saldo) + " kroner");
        break;

    default:
        console.log("ugyldig valg");    
}
