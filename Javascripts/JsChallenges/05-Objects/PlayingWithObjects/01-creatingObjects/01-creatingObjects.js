// 1-> Object Literals (Recommended for simple use cases
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023
};



// 2>> Using the new Object() Constructor
const book = new Object();
book.title = "JavaScript Basics";
book.author = "Jane Doe";


// 3>> Using a Constructor Function
function Animal(name, type) {
    this.name = name;
    this.type = type;
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.name); // "Buddy"


// 4>> Using Classes (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const userONe = new Person("Alice", 30);
console.log(userONe.age); // 30




//   5>> Using Object.create() (For Prototypal Inheritance)



// const prototype = {
//     greet: function () {
//         return `Hello, ${this.name}`;
//     }
// };

const user = Object.create({});
user.name = "Bob";
user.greet = () => console.log("I am greeting " + user.name)
console.log(user)
user.greet()// "Hello, Bob"

