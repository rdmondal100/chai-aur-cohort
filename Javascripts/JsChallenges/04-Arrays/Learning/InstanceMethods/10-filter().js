// // array.filter(callback(element, index, array), thisArg);



// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]





// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 30 }
// ];

// const adults = users.filter(user => user.age >= 18);
// console.log(adults);
// /* Output:
// [
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]
// */




const values = [0, 1, false, 2, "", 3, null, "hello"];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, 2, 3, "hello"]



// thisArgs 
const threshold = {
    minAge: 18
};

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

const adults = users.filter(function (user) {
    return user.age >= this.minAge; // Using `this` to reference `threshold`
}, threshold);

console.log(adults);
/* Output:
[
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 30 }
]
*/
