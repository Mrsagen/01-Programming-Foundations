
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
}
*/

/*
const player = {
    // Properties
    name: "Aisha",
    score: 4200,
    level: 8,
    // Methods
    levelUp: function () {
        this.level++;
        console.log(`${this.name} reached level ${this.level}!`);
    }
};
player.levelUp();
player["levelUp"]();

player.levelUp = function () {
    console.log(`${this.name} is unstoppable!`);
};
player.levelUp();


Properties and methods
*/

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
smartphone.batterycharge();
*/

/*
1. Create an album object using literal syntax with title and artist properties.
2. Create a constructor function Album(title, artist) that assigns both to this, then create an instance called myAlbum using new.
3. Add a method summary to myAlbum that returns a string using this.title and this.artist, and log its result.
4. Add a new property (e.g., year) to myAlbum after creation and log it.
5. Add a property to the constructor function itself (Album.defaultFormat = "digital") and show that myAlbum.defaultFormat is undefined.


// 1. Using literal syntax 
const album = {
    title: "Thriller",
    artist: "Michael Jackson"
};
console.log(album.title);

// 2. Using constructor function
function Album(title, artist) {
    this.title = title;
    this.artist = artist;
}
const myAlbum = new Album("Thriller", "Michael Jackson");
console.log(myAlbum.title);

// 3. Adding a method summary
myAlbum.summary = function () {
    return `${this.title} by ${this.artist}`;
};
console.log(myAlbum.summary());

// 4. Adding a new property year
myAlbum.year = 1982;
console.log(myAlbum.year);

// 5. Adding a property to the constructor function itself
Album.defaultFormat = "digital";
console.log(myAlbum.defaultFormat); // Output: undefined
*/

/*
1. Create a constructor function Recipe(name, servings) that assigns both to this.
2. Create two instances: recipeA and recipeB with different values.
3. Add a shared method describe on Recipe.prototype (use a regular function).
4. Call describe() on both instances and log the results.
5. Show that describe is shared and inherited: log recipeA.describe === recipeB.describe, and use hasOwnProperty (or Object.hasOwn) to show that name is own but describe is not.


function Recipe(name, servings) {
    this.name = name;
    this.servings = servings;
}

Recipe.prototype.describe = function() {
    return `${this.name} serves ${this.servings}`;
};

const recipeA = new Recipe("Pasta", 4);
const recipeB = new Recipe("Salad", 2);
console.log(recipeA.describe());
console.log(recipeB.describe());

console.log(recipeA.describe === recipeB.describe);
console.log(recipeA.hasOwnProperty("describe"));
console.log(recipeB.hasOwnProperty("describe"));
*/

/*
1. Create a trip object with properties: destination, days, and country.
2. Use destructuring to extract destination and days into variables, then log them.
3. Destructure country but rename it to tripCountry, then log it.
4. Destructure a cost property with a default value of "Unknown" and log it.
5. Write a function printTrip that takes a destructured object parameter with destination and days, and logs "Trip to <destination> for <days> days" when called with the trip object.

*/
/*

const trip = {
    destination: "Paris",
    days: 5,
    country: "France"
};  
const { destination, days } = trip;
console.log(destination);
console.log(days);  
const { country: tripCountry } = trip;
console.log(tripCountry);  
const { cost = "Unknown" } = trip;
console.log(cost);
*/

/*
1. Create a class Animal with a constructor that sets a name property and a method speak() that returns "<name> makes a noise".
2. Create a class Dog that extends Animal. In its constructor, call super(name) and also set a breed property.
3. Add a new method to Dog called fetch() that returns "<name> is fetching the ball".
4. Override the speak() method in Dog so it returns "<name> barks".
5. Create an instance of Dog and call its speak() and fetch() methods, logging the results.
*/
/*
class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise`;
    }
}

class Dog extends animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    fetch() {
        return `${this.name} is fetching the ball`;
    }

    speak() {
        return `${this.name} barks`;
    }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.speak());
console.log(myDog.fetch());
*/
/*
class Spacecraft {
  constructor(name, crew) {
    this.name = name;
    this._crew = crew;
  }
  launch() {
    return `${this.name} is launching with ${this._crew} crew members.`;
  }
} //Encapsulation

class CargoShip extends Spacecraft {
  constructor(name, crew, cargoCapacity) {
    super(name, crew);
    this.cargoCapacity = cargoCapacity;
  }
  loadCargo(amount) {
    return `${this.name} is loading ${amount} tons of cargo.`;
  }
  launch() {
    return `${this.name} is launching with ${this.cargoCapacity} tons of cargo space.`;
  }
}

const explorer = new Spacecraft("Explorer One", 5);
const hauler = new CargoShip("Galactic Hauler", 8, 300);

console.log(explorer.launch());
console.log(hauler.launch());
console.log(hauler.loadCargo(120));
*/

/*
1. Encapsulation: The Spacecraft class encapsulates the properties name and _crew, and the method launch(). The CargoShip class encapsulates the additional property cargoCapacity and the method loadCargo().  
2. Inheritance: The CargoShip class inherits from the Spacecraft class using the extends keyword. It can access the properties and methods of Spacecraft, such as name and launch().
3. Abstraction: The Spacecraft class provides an abstract representation of a spacecraft, hiding the internal details of how it operates. The launch() method abstracts the action of launching without exposing the underlying mechanics.
4. Polymorphism: The CargoShip class overrides the launch() method from the Spacecraft class to provide a different implementation that includes cargo capacity. This allows us to call launch() on both Spacecraft and CargoShip instances, and they will behave differently based on their class.
*/
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.describe = function () {
    return `${this.make} ${this.model}`;
};
const carA = new Car("Toyota", "Corolla");
const carB = new Car("Ford", "Focus");
console.log(carA.describe === carB.describe);