// array.keys();
// Returns → An Array Iterator object containing the indexes (keys) of the array.
// Does not modify the original array.
// Must use a loop (for...of) or .next() to retrieve values



// const fruits = ["Apple", "Banana", "Mango"];

// const value = fruits.keys()
// console.log(value)

// console.log(value.next())
// console.log(value.next())
// console.log(value.next())
// console.log(value.next())
// console.log(value.next())
// for (const key of fruits.keys()) {
//     console.log(key);
// }




const numbers = [10, ,undefined, 20, 30];

const keysArray = [...numbers.keys()];

console.log(keysArray); // Output: [0, 1, 2]




const arr = ["A", "B", "C"];

console.log([...arr.keys()]);   // Output: [0, 1, 2]
console.log([...arr.values()]); // Output: ["A", "B", "C"]
console.log([...arr.entries()]); // Output: [[0, "A"], [1, "B"], [2, "C"]]
