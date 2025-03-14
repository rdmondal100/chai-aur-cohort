// array.values();


// The .values() method returns an iterator that contains the values of the array elements.
// This method does not modify the original array.
// You can use it with for...of loops or the .next() method to iterate through values.


const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
    console.log(letter);
} // "a" "b" "c" "d" "e"




// const numbers = [10, 20, 30];
// const iterator = numbers.values();

// console.log(iterator.next().value); // 10
// console.log(iterator.next().value); // 20
// console.log(iterator.next().value); // 30
// console.log(iterator.next().value); // undefined (no more elements)
