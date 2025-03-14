// array.findLastIndex(callback(element, index, array), thisArg);



const numbers = [10, 15, 20, 25, 30];

const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
console.log(lastEvenIndex); // 4



const users = [
    { id: 1, name: "Alice", age: 17 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 16 }
];

const lastAdultIndex = users.findLastIndex(user => user.age >= 18);
console.log(lastAdultIndex); // 2 (Charlie's index)



// const numbers = [1, 3, 5, 7];

// const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0);
// console.log(lastEvenIndex); // -1 (no even numbers found)
