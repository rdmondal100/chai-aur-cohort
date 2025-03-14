// array.findLast(callback(element, index, array), thisArg);



const numbers = [10, 15, 20, 25, 30];

const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven); // 30





const users = [
    { id: 1, name: "Alice", age: 17 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 16 }
];

const lastAdult = users.findLast(user => user.age >= 18);
console.log(lastAdult);
// { id: 3, name: "Charlie", age: 30 }




// const numbers = [1, 3, 5, 7];

// const lastEven = numbers.findLast(num => num % 2 === 0);
// console.log(lastEven); // undefined (no even numbers found)
