
// array.reduceRight(callbackFn(accumulator, currentValue, index, array)
// , initialValue);



// The reduceRight() method works like reduce(), but it processes the array from right to left instead of left to right.

const numbers = [1, 2, 3, 4];

const sum = numbers.reduceRight((acc, num) => acc + num, 0);

console.log(sum);  
// Output: 10





