// array.reduce(callbackFn(accumulator, currentValue, index, array), initialValue);

// The reduce() method executes a callback function on each element of an array, accumulating a single return value.



// callbackFn(accumulator, currentValue, index, array)
// accumulator → Stores the result of previous operations.
// currentValue → The current element being processed.
// index (optional) → The index of the current element.
// array (optional) → The original array.
// initialValue (optional) → The starting value of the accumulator.
// Returns → A single value (sum, object, array, etc.).




const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
// Output: 15





const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }



const emptyArray = [];

const result = emptyArray.reduce((acc, num) => acc + num);  
// TypeError: Reduce of empty array with no initial value
