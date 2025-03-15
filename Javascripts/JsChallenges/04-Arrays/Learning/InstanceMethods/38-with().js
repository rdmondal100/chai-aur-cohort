// array.with(index, value);

// The .with() method creates a new array with a specified element replaced at a given index.

// It does not modify the original array (immutable).
// Returns a new array with the updated value.
// If the index is out of range, it throws a RangeError.

// index	The zero-based index of the element to replace.
// value	The new value to insert at the specified index.



const fruits = ["apple", "banana", "cherry"];
const newFruits = fruits.with(1, "orange");

console.log(newFruits); // ["apple", "orange", "cherry"]
console.log(fruits);    // ["apple", "banana", "cherry"] (Original remains unchanged)




const items = [1, 2, 3];

// console.log(items.with(10, 99)); // ❌ RangeError: Index 10 out of range
