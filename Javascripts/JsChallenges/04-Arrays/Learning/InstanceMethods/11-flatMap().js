// array.flatMap(callback(element, index, array), thisArg);




// const numbers = [1, 2, 3];
// const result = numbers.flatMap(num => [num, num * 2]);

// console.log(result); // [1, 2, 2, 4, 3, 6]



const mapped = numbers.map(num => [num, num * 2]);
console.log(mapped); // [[1, 2], [2, 4], [3, 6]]

const flattened = mapped.flat(1);
console.log(flattened); // [1, 2, 2, 4, 3, 6]




const words = ["hello", "", "world"];
const filtered = words.flatMap(word => word ? [word.toUpperCase()] : []);
console.log(filtered); // ["HELLO", "WORLD"]




// const nested = [[1], [2, 3], [4]];
// const flattened = nested.flatMap(arr => arr);
// console.log(flattened); // [1, 2, 3, 4]
