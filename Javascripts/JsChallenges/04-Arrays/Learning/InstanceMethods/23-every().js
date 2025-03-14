// array.every(callbackFn(element, index, array), thisArg);


// The .every() method checks if all elements in the array satisfy the given condition.
// It returns true if every element passes the test; otherwise, it returns false.
// It stops checking as soon as it finds the first false result.




// const numbers = [13, 111, 9, 101];

// const allPositive = numbers.every(num => num % 2 );
// console.log(allPositive); // true





const obj = { min: 10 };

const numbers = [12, 15, 20];

const result = numbers.every(function (num) {
    return num > this.min;
}, obj);

console.log(result); // true (since all numbers are greater than 10)
