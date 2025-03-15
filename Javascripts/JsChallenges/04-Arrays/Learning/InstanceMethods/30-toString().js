
// array.toString();


// The toString() method converts an array into a comma-separated string.

// Returns → A string containing all elements separated by a comma (,).
// Does NOT modify the original array.
// Does NOT accept any parameters.



const mixedArray = ["Hello", , "World"];

console.log(mixedArray.toString());
// Output: "Hello,,World"



const nested = [[1, 2], [3, 4]];

console.log(nested.toString());
// Output: "1,2,3,4"



const deepNested = [[1, [2, 3]], [4, 5]];

console.log(deepNested.toString());
// Output: "1,2,3,4,5"


const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.toString();

console.log(result);
// Output: "Apple,Banana,Mango"
