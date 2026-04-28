//oppgave 1
let global;

function storeValue() {
    const result = prompt("Provide the new data if you want to change it. Otherwise click Cancel.");

    if(result !== null && result !== "") {    
        alert(result);
        global = result;
    } 
    
    else {
        alert(global);
    }
}

//oppgave 2
function addTwoNumbers() {
    let num1 = parseInt(prompt("Provide the first number:"));   
    let num2 = parseInt(prompt("Provide the second number:"));    
    if(!isNaN(num1) && !isNaN(num2)) {        
        alert("The final score is: " + (num1+num2));   
    }
    else {
        alert("Wrong data");
    }
}

//oppgave 3
function extractMiddleString() {
    const text = prompt("Provide string containing at least 5 characters.")
    if(text.length < 5) {  
        alert("Wrong data");
        return;
    }
    const startIndex = text.length / 2;
    const length = Math.round(text.length / 2);
    const oddeven = 1 - text.length % 2;
    alert(text.slice(startIndex - (length / 2), startIndex + (length / 2) + oddeven));  
}

//oppgave 4
function stringReplace() {
    let text = prompt("Provide string containing at least 5 characters.");    
    text = text.replace(/a/ig, '@').replace(/e/ig, '3').replace(/o/ig, '0');
    alert(text);  
}

//oppgave 5
function ifExample() {
    const age = parseInt(prompt("How old are you?"));
    if(!isNaN(age) && age > 1){  
        if(confirm("Are you sure that your age is: " + age + "?")) {
        } if (confirm("Definitely?")) {    
            alert("Your age is " + age + "!");
            return;
            }
    }
        alert("I still don't know your age :(");    
    }
   


//oppgave 6
function switchExample() {
    const number = parseInt(prompt("Please provide a number from 1 to 5"));
    if(isNaN(number) || number < 1 || number > 5) {    
        alert("Wrong data");
        return;
    }
    switch(number) { 
        case 1:
            alert("Your favourite number is 1. It means you probably always want to win everything!")
            break;            
        case 2:
            alert("Your favourite number is 2. It means you probably have really good relations with people!")
            break;
        case 3:
            alert("Your favourite number is 3. It means you probably don't like to take a risk!")
            break;
        case 4:
            alert("Your favourite number is 4. It means you probably are not afraid about anything!")
            break;
        case 5:
            alert("Your favourite number is 5. It means you probably are a perfect student!")
            break;
        default:
            alert("Something went wrong.")
            break;                 
    }
}

//oppgave 7
let spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";
spliceText = spliceText.replace(/\./g, '');
spliceText = spliceText.replace(/\,/g, '');
function spliceExample() {
    //text from: https://www.lipsum.com/ - 100 words
    const array = spliceText.split(" ");    
    console.log(array);

    const length = parseInt(prompt("Specify the word's length:"));
    if(isNaN(length) || length <= 0) {  
        alert("Wrong length");
        return;
    }

    const word = array.find(x => x.length == length);

    if (word !== undefined) {
        const index = array.indexOf(word);
        array.splice(index + 1, 2, word);
        spliceText = array.join(" ");
        console.log(array);
    }
 }

//oppgave 8
function iteratorMethods() {
    const toAdd = prompt("Specify the text to add to each element of the current string")
    let array = spliceText.split(" ");   
    array = array.map( x => x + toAdd); 
    spliceText = array.join(" ");
    console.log(spliceText);
}

//oppgave 9
function infiniteLoop() {
    while(true) {
        const res = prompt("Write STOP to exit");
        if(res === "STOP") {
            return;   
        }
    }
}

//oppgave 10 
function ultimateExample() {
    const n = parseInt(prompt("Please provide the length of the side of the square"))
    if (isNaN(n) || n < 0 || n > 50) {  
        alert("Wrong data");
        return;
    }    
    for(let i=0; i<n; i++) {    
        let line = "";
        for (let j=0; j<n; j++) {
            const number = Math.round(Math.random() * 4);
            switch(number) {  
                case 1:
                    line += ".";
                    break;
                case 2:
                    line += "X";
                    break;
                case 3:
                    line += "|";
                    break;
                case 4:
                    line += "_";
                    break;
                default:
                    line += " ";
                    break;
            }
        }
        console.log(line);
    }
}