const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

const evenNumbers = number.filter(num => num % 2 === 0);

const sorted = evenNumbers.sort((a, b) => b - a);


const final = sorted.map(num => `number: ${num}` );

setTimeout(() => {
    console.log(final);
}, 1000);