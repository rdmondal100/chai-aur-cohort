// array.slice(start, end);

// start (optional) → The index where extraction begins. Default is 0.
// end (optional) → The index where extraction stops (not included). Default is array.length.



// const numbers = [10, 20, 30, 40, 50];

// const sliced = numbers.slice(1, 4);
// console.log(sliced); // [20, 30, 40]  (index 4 is not included)





const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-3));     // [30, 40, 50] (last 3 elements)
console.log(numbers.slice(-4, -1)); // [20, 30, 40] (excludes last element)






// copy 
const original = [1, 2, 3];
const copy = original.slice(); 

console.log(copy);      // [1, 2, 3]
console.log(original);  // [1, 2, 3] (unchanged)
