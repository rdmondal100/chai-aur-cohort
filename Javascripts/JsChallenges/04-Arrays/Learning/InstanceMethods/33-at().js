// array.at(index);

// The at() method returns the element at a specified index in an array. It supports negative indexing, allowing you to access elements from the end of the array.



// index → The position of the element to retrieve.
// Returns → The element at the given index, or undefined if the index is out of range.
// Supports negative indices (unlike arr[index]).




const numbers = [10, 20, 30, 40, 50];

console.log(numbers.at(2)); // Output: 30
console.log(numbers.at(-1)); // Output: 50 (last element)



const arr = [1, 2, 3];

console.log(arr.at(10)); // Output: undefined
console.log(arr.at(-5)); // Output: undefined



const str = "JavaScript";

console.log(str.at(0)); // Output: "J"
console.log(str.at(-1)); // Output: "t" (last character)
