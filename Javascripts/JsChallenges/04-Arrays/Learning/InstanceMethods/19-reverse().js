// array.reverse();


const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers); 
// Output: [5, 4, 3, 2, 1]




// Reversing a String (Using split(), reverse(), and join())
// Since reverse() works only on arrays, you need to convert a string into an array first.

const str = "hello";

// Convert string to array, reverse it, then join it back
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); 
// Output: "olleh"



// If you need to keep the original array unchanged, use .slice() before .reverse():
// javascript
// Copy
// Edit

const original = [1, 2, 3, 4, 5];
const reversedCopy = original.slice().reverse();
console.log(original);      // [1, 2, 3, 4, 5]
console.log(reversedCopy);  // [5, 4, 3, 2, 1]
