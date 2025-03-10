// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)






const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]


// let result = myFish.splice(1, 1, "Riday", "Supta")
// let result = myFish.splice(myFish.length, 0, "Riday", "Supta")
// let result = myFish.splice(myFish.length, 2, "Riday", "Supta")
let result = myFish.splice(myFish.length-2, 2, "Riday", "Supta")
console.log(result)
console.log(myFish)