// array.join(separator);


// The join() method converts an array into a string by joining all its elements using a specified separator.


// separator (optional) → The string used to separate elements.
// Default: , (comma) if not provided.
// Returns → A string containing all array elements.



// const words = ["Hello", "world", "JavaScript"];

// const result = words.join();

// console.log(result);  
// // Output: "Hello,world,JavaScript"



// const words = ["Hello", "world", "JavaScript"];

// const result = words.join(" "); // Using a space separator

// console.log(result);  
// // Output: "Hello world JavaScript"


const numbers = [1, 2, 3, 4, 5];

const result = numbers.join("-");

console.log(numbers);  
console.log(result);  
// Output: "1-2-3-4-5"
