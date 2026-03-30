/* 
1. Cleans up the name: trims it and formats it with proper casing (first and last name capitalised).
2. Replaces all versions of 'HELP' in the message (case-insensitive) with 'assistance'.
3. Capitalises the first letter of the message.
4. Logs the cleaned-up name and message.
5. Checks if the message contains 'please' and ends with a period.
6. Finds and logs the last word in the message (cleaned of any punctuation). Leave a comment on how you removed the punctuation from the last word.
*/

let rawName = '  Luna LoveGOOD ';
let rawMessage = 'hello! i need HELP. i repeat, I need HELP!! please respond. ';

let lunaclean = rawName.trim().toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

let messageclean = rawMessage.trim().replaceAll(/help/gi, 'assistance');
messageclean = messageclean.charAt(0).toLocaleUpperCase() + messageclean.slice(1);


console.log(lunaclean);
console.log(messageclean);

console.log(messageclean.includes('please'));
console.log(messageclean.endsWith('.'));

let words = messageclean.split(" ");
let last = words[words.length -1].replace(/[^a-zA-Z]/g, '');
console.log(last);
