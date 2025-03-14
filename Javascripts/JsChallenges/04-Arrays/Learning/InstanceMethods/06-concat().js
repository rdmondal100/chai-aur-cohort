// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)



const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = { 3: 6, 4: 2 }
// console.log(array3);

// Expected output: Array ["a", "b", "c", "d", "e", "f"]

console.log(array1.concat(array2, array3))


// [Symbol.isConcatSpreadable]: true };   ?? what is this?



console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]






//  pending
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
