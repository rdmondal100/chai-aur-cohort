// array.copyWithin(target, start, end);

// The .copyWithin() method copies a portion of an array to another location within the same array.
// It modifies the original array in place (does not create a new array).
// It does not change the array's length.



const numbers = [10, 20, 30, 40, 50];

// Copy elements from index 1 to 3 (20, 30) to index 3
numbers.copyWithin(4,0,4);

console.log(numbers); // [10, 20, 30, 20, 30]




const arr = [10, 20, 30, 40, 50];

arr.copyWithin(-3, -4, -2); 

console.log(arr); // [10, 20, 20, 30, 50]
