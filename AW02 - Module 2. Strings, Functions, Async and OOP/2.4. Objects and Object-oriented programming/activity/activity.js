
//From primitives to objects
/*
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
}

console.log(book.title); // Output: "The Great Gatsby"
console.log(book["pages"]); // Output: 180
book.title = "The Great Gatsby: Revised Edition";
console.log(book.title); // Output: "The Great Gatsby: Revised Edition"
for (let key in book) {
    console.log(key + ": " + book[key]);
}*/

// const player = {
//     // Properties
//     name: "Aisha",
//     score: 4200,
//     level: 8,
//     // Methods
//     levelUp: function () {
//         this.level++;
//         console.log(`${this.name} reached level ${this.level}!`);
//     }
// };
// player.levelUp();
// player["levelUp"]();

// player.levelUp = function () {
//     console.log(`${this.name} is unstoppable!`);
// };
// player.levelUp();


// Properties and methods
/*
const smartphone = {
    //properties
    brand: "iphone",
    batterylevel: 10,
    //methods
    batterycharge: function () {
        this.batterylevel = this.batterylevel + 10;
        console.log(`Battery level: ${this.batterylevel}%`);
    }
};
console.log(smartphone.brand); // Output: "iphone"
smartphone["batterycharge"](); // Output: "Battery level: 20%"
smartphone["batterycharge"](); // Output: "Battery level: 30%"

smartphone.batterycharge = function () {
    this.batterylevel += 10;
    if (this.batterylevel >= 100) {
        this.batterylevel = 100;
        console.log("Battery fully charged!");
    }
        else {
            console.log(`Battery level: ${this.batterylevel}%`);
        }
    };
smartphone.batterycharge();
smartphone.batterycharge();
smartphone.batterycharge();
smartphone.batterycharge();
smartphone.batterycharge();
smartphone.batterycharge();
smartphone.batterycharge();*/

