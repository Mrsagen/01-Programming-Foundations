/*
Create a script and do the following:

1. Create a literal object magazine with properties title, issue, and editor, 
plus a describe method that uses this to return all the properties as a string. Log its output.

2. Build a constructor function LibraryItem with properties title, author, and year. Add a shared 
describe method to its prototype. Create two instances and prove the method is shared by logging a comparison.
3. Destructure magazine to extract the title property (rename it to magTitle) and the genre property 
(give it a default value of "General Tech"). Log both values individually.

4. Define a Book class with properties title, author, and year, and a describe method.

5. Define an EBook class that extends Book, adds a fileSize property, and overrides the describe method to include the file size.

6. Create one magazine, one LibraryItem, one Book, and one EBook, put them into an array, and demonstrate polymorphism by calling describe() 
on each item in a loop.
*/
// 1. Create a literal object magazine with properties title, issue, and editor,
const magazine ={
    title: "Tech Monthly",
    issue: "July 2024",
    editor: "Jane Doe",
    describe: function() {
        return `${this.title} (${this.issue}) edited by ${this.editor}`;
    }
};

console.log(magazine.describe()); 
// 2. Build a constructor function LibraryItem with properties title, author, and year. Add a shared
function LibraryItem(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

LibraryItem.prototype.describe = function() {
    return `${this.title} by ${this.author} (${this.year})`;
};

const libraryItem1 = new LibraryItem("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const libraryItem2 = new LibraryItem("1984", "George Orwell", 1948);

console.log(libraryItem1.describe());
console.log(libraryItem2.describe());
console.log(libraryItem1.describe === libraryItem2.describe);
// 3. Destructure magazine to extract the title property (rename it to magTitle) and the genre property
const { title: magTitle, genre = "General Tech" } = magazine;
console.log(magTitle); 
console.log(genre);
// 4. Define a Book class with properties title, author, and year, and a describe method.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    describe() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
}
// 5. Define an EBook class that extends Book, adds a fileSize property, and overrides the describe method to include the file size.
class EBook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }

    describe() {
        return `${super.describe()} - File Size: ${this.fileSize} MB`;
    }
}
// 6. Create one magazine, one LibraryItem, one Book, and one EBook, put them into an array, and demonstrate polymorphism by calling describe() on each item in a loop.
const book = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const ebook = new EBook("The Pragmatic Programmer", "Andrew Hunt", 1999, 5);
const catalog =[magazine, libraryItem1, book, ebook];
for (const item of catalog) {
    console.log(item.describe());
}
