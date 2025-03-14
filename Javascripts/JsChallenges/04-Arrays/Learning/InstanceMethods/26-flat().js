// array.flat(depth);

// The flat() method in JavaScript is used to flatten a nested array by removing nested levels and returning a new array.



const arr = [1, [2, 3], [4, 5]];

const flatArray = arr.flat();

console.log(flatArray);  
// Output: [1, 2, 3, 4, 5]




const nestedArr = [1, [2, [3, [4, 5]]]];

console.log(nestedArr.flat(1));  
// Output: [1, 2, [3, [4, 5]]]  (flattened 1 level)

console.log(nestedArr.flat(2));  
// Output: [1, 2, 3, [4, 5]]  (flattened 2 levels)

console.log(nestedArr.flat(Infinity));  
// Output: [1, 2, 3, 4, 5]  (completely flattened)




const arrWithHoles = [1, , 3, [4, , 6]];

console.log(arrWithHoles.flat());
// Output: [1, 3, 4, 6] (removes empty slots)
