// array.toSorted(compareFn);

// Returns: A new sorted array, while keeping the original array unchanged.


const numbers = [100, 25, 3, 40];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log(numbers);       
// Output: [100, 25, 3, 40] (original array remains unchanged)

console.log(sortedNumbers);  
// Output: [3, 25, 40, 100] (new sorted array)



// toSorted() is relatively new and may not be available in older browsers.

const sortedArray = [...array].sort((a, b) => a - b);
