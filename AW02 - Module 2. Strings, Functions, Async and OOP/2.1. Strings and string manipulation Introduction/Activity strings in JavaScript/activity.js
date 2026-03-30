console.log("Activity: Strings in JavaScript");
/*
Write a script that does the following:

1. Create a string that contains your full name (first and last).
2. Split the name into an array using a space as the separator.
3. Access and log only the first name using array indexing.
4. Join the array back into a single string using a custom separator, like -.
5. Log the length of the full name string (how many characters it has, including the space).
6. Log the first and last character of the original name string using indexing.
*/

let myname = "Fredrik Sagen";
const splitname = myname.split(' ');
console.log("Name:",splitname[0]); // Fredrik

let joined = splitname.join(' - ');
console.log("name length:",joined.length); // Fredrik - Sagen

console.log("First Character:",myname[0]); // F
console.log("Last Character:",myname[myname.length -1]); // n


console.log(`\nActivity: String comparisons`);
/*
1. Create two string variables with different values, such as 'pear' and 'peach'.
2. Compare them using === and log the result.
3. Compare them using < or > and log the result.
4. Try comparing 'Apple' and 'apple' and observe the result.
5. Try comparing 'Zoo' and 'antelope' and observe the result.
6. Based on what you see, explain in a comment how the comparison works.
*/
let a = 'cake';
let b = 'hamburger';
console.log("cake === hamburger =", a === b); // False: not identical strings.
console.log("cake < hamburger =",a < b); // True: "c" comes before "h" in Unicode.

let c = 'Apple';
let d = 'apple';
console.log("Apple === apple =", c === d); // False: case-sensitive comparson.
console.log("Apple < apple =", c < d); // True: uppercase "A" comes before lowercase "a".

let e = 'Zoo';
let f = 'antelope';
console.log("Zoo === antelope =",e === f); // False: not identical strings.
console.log("Zoo < antelope =",e < f); // True: uppercase "Z" comes before lowercase "a".


console.log(`\nActivity: String formatting`);
/*
1. Create two variables: one with a name, and one with a price (as a string, like '9.5').
2. Use a template literal to create a sentence like: The item costs $9.5.
3. Pad the price so it’s always at least 6 characters long (e.g., ' 9.5').
4. Log a string that includes both the name and the padded price, separated by a tab.
5. Add a line break and log a message like Thank you!, starting on the next line.
*/
let cola = "Coca-Cola";
let colacost = "1.5";
let colaitem = `The item costs $${colacost}.`;
let padcolacost = (colacost.padStart(6));
console.log(colaitem); //Prints: 'The item costs $1.5.'
console.log(padcolacost); //prints: '   1.5'
console.log(`${cola}\t${padcolacost}`); //prints 'Coca-Cola      1.5'
console.log(`\nThank You!`); //prints: "Thank you!" on the next line.


console.log(`\nActivity: Manipulating strings`);
/*
1. Replace the word 'please' with 'kindly'.
2. Notice that the word 'email' appears twice - use replaceAll() to fix that by keeping only one. Hint: You can use ‘email email’ as an argument in replace().
3. Extract just the word 'continue' using both slice() and substring() (try to match the same result).
4. Log the cleaned-up message in all capital letters so it stands out in logs.
5. Add a comment explaining one situation where replaceAll() would save you time over replace().
*/

let message = 'please confirm your email email to continue';
let kindly = message.replace('please', 'kindly');
let email = kindly.replaceAll('email email', 'email');
let slice = email.slice(29, 37);
let substring = email.substring(29, 37);

console.log(email.toUpperCase()); //prints: 'kindly confirm your email to continue'
console.log(slice); //prints: 'continue'
console.log(substring); //prints: 'continue'

// replaceAll() saves time when you need to replace all occurrences of a word in a long text, instead of only the first match.



console.log(`\nActivity: Searching strings`);
/*
1. Check if the log contains the word 'ERROR'.
2. Check if the log starts with 'ERROR'.
3. Check if the log ends with the time '14:23'.
4. Use .indexOf() to find the position of the word 'lost'.
5. Use a regex to confirm the log contains a time in the format dd:dd (digits, colon, digits).
6. Extract the time from the log using .match().
*/

let log = 'ERROR: Connection lost at 14:23';
let time = log.match(/\d{2}:\d{2}/)[0];

console.log("Check if the log contains the word 'ERROR':", log.includes('ERROR'));
console.log("Check if the log starts with 'ERROR'.:", log.startsWith('ERROR'));
console.log("Check if the log ends with the time '14:23'.:", log.endsWith('14:23'));
console.log("position of the word 'lost'.:", log.indexOf('lost'));
console.log("format dd:dd:", /\d{2}:\d{2}/.test(log));
console.log("time:", time);