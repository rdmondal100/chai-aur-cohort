// Syntax 

// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)







// calling push() on non-array objects 
const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};

Array.prototype.push.call(arrayLike, 1, 2);
console.log(arrayLike);
// { '2': 4, '3': 1, '4': 2, length: 5, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.push.call(plainObj, 1, 2);
console.log(plainObj);
// { '0': 1, '1': 2, length: 2 }


// How .push() works with an array-like object:
// .push() adds values starting at the current length index and then updates length accordingly.
// Since arrayLike.length = 3, the push() method will:

// Set arrayLike[3] = 1 (since length was 3).
// Set arrayLike[4] = 2 (next available index).
// Update length to 5 (3 + 2 because two items were added).
