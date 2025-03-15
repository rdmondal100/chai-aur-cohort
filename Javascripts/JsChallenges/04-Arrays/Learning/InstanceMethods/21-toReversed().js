// array.toReversed();

// No parameters are needed.
// Returns a new array with elements in reverse order.
// Does not modify the original array.

const numbers = [1, 2, 3, 4, 5];

const reversedNumbers = numbers.toReversed();

console.log(numbers);       
// Output: [1, 2, 3, 4, 5] (original remains unchanged)

console.log(reversedNumbers);  
// Output: [5, 4, 3, 2, 1] (new reversed array)




// Alternative for Older Browsers

const reversedArray = [...array].reverse();
