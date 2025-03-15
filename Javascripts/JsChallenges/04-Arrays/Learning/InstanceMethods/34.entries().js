// array.entries();

// The entries() method returns an iterator that contains key-value pairs (index, value) for each element in an array.



// Returns → A new Array Iterator object containing index-value pairs.
// Does not modify the original array.
// Must use a loop (e.g., for...of) or .next() to access values.


const fruits = ["Apple", "Banana", "Mango"];

for (const [index, value] of fruits.entries()) {
    console.log(`Index ${index}: ${value}`);
}


const colors = ["Red", "Green", "Blue"];
const iterator = colors.entries();

// console.log(iterator.next().value); // Output: [0, "Red"]
// console.log(iterator.next().value); // Output: [1, "Green"]
// console.log(iterator.next().value); // Output: [2, "Blue"]
// console.log(iterator.next().value); // Output: undefined

console.log(iterator.next())
console.log(iterator.next())
// console.log(iterator)




// const arr = ["A", "B", "C"];

// console.log([...arr.keys()]);   // Output: [0, 1, 2]
// console.log([...arr.values()]); // Output: ["A", "B", "C"]
// console.log([...arr.entries()]); // Output: [[0, "A"], [1, "B"], [2, "C"]]

