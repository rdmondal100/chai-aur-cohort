// array.find(callback(element, index, array), thisArg);



const numbers = [10, 20, 30, 40, 50];

const foundNumber = numbers.find(num => num > 25);
console.log(foundNumber); // 30




const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 30 }
];

const user = users.find(person => person.age >= 18);
console.log(user);
// { id: 1, name: "Alice", age: 25 }
