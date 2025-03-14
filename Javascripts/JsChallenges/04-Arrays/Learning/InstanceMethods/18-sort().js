// array.sort(compareFunction)


// "100" comes before "25" because "1" has a lower Unicode value than "2".

const numbers = [100, 25, 3, 40];
numbers.sort();
console.log(numbers);
// Output: [100, 25, 3, 40] (wrong for numbers because it sorts as strings)




// const numbers = [100, 25, 3, 40];

// // Ascending order (smallest to largest)
// numbers.sort((a, b) => a - b);
// console.log(numbers); 
// // Output: [3, 25, 40, 100]

// // Descending order (largest to smallest)
// numbers.sort((a, b) => b - a);
// console.log(numbers); 
// // Output: [100, 40, 25, 3]


// By default, uppercase letters come before lowercase letters in ASCII order. To ignore case, use localeCompare()

const names = ["John", "alice", "Bob"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
// Output: ["alice", "Bob", "John"] (case-insensitive)



const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

// Sorting by price (ascending)
products.sort((a, b) => a.price - b.price);
console.log(products);

// Output:
// [
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 75 },
//   { name: "Laptop", price: 1200 }
// ]
