// Sorting Numbers and Strings

// You’re given an array of product names and an array of product prices. Write a script that:

// 1. Sorts the product names alphabetically (A–Z).
// 2. Sorts the product names in reverse alphabetical order (Z–A).
// 3. Sorts the prices from lowest to highest.
// 4. Sorts the prices from highest to lowest.
// 5. Bonus: Sort the product names alphabetically without caring about uppercase vs lowercase letters.
// Hint for the bonus:
// .localeCompare() takes three arguments:

/*
const productNames = ["Banana", "apple", "Cherry", "apricot"];
const productPrices = [9.99, 1.5, 4.25, 12.0];

// 1. Alphabetical (A–Z)

 productNames.sort();

console.log(productNames);

// 2. Reverse alphabetical (Z–A)

 productNames.sort((a, b) => a.localeCompare(b));

console.log(productNames);

// 3. Prices: Low → High

 productPrices.sort((a, b) => a - b);

console.log(productPrices);

// 4. Prices: High → Low

 productPrices.sort((a, b) => b - a);

console.log(productPrices);


// 5. Bonus: Alphabetical (case-insensitive)

 productNames.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
console.log(productNames);*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(num => num > 5).map(num => num * 2).reduce((acc, num) => acc + num, 0));