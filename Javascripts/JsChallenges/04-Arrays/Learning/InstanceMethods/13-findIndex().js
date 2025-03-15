// array.findIndex(callback(element, index, array), thisArg);




const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex(num => num > 25);
console.log(index); // 2


// const users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 17 },
//     { id: 3, name: "Charlie", age: 30 }
// ];

// const index = users.findIndex(user => user.age >= 18);
// console.log(index); // 0 (Alice is the first adult)




// const numbers = [1, 3, 5, 7];

// const index = numbers.findIndex(num => num % 2 === 0);
// console.log(index); // -1 (no even numbers found)
