// map(callbackFn, thisArg)
// map(callbackFn)

// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const names = ["Alice", "Bob", "Charlie"];

const nameLengths = names.map((name, index, arr) => {
    console.log(`Index: ${index}, Name: ${name}, Array: ${arr}`);
    return name.length;
});

console.log(nameLengths);
