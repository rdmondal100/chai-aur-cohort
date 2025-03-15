// array.fill(value, start, end);

// value → The value to fill the array with.
// start (optional) → The index to begin filling (default: 0).
// end (optional) → The index to stop filling (not included, default: array length).
// Returns → The modified original array.




// const arr = [1, 2, 3, 4, 5];

// arr.fill(0);

// console.log(arr);
// Output: [0, 0, 0, 0, 0]



// const arr = [1, 2, 3, 4, 5];

// arr.fill(9, 2);

// console.log(arr);
// // Output: [1, 2, 9, 9, 9]



// const arr = new Array(5).fill("A");

// console.log(arr);
// // Output: ["A", "A", "A", "A", "A"]



const arr = new Array(3).fill({ name: "John" });

arr[0].name = "Doe";

console.log(arr);
// Output: [{ name: "Doe" }, { name: "Doe" }, { name: "Doe" }]



const myarray = new Array(3).fill(null).map(() => ({ name: "John" }));

myarray[0].name = "Doe";

console.log(myarray);
// Output: [{ name: "Doe" }, { name: "John" }, { name: "John" }]
