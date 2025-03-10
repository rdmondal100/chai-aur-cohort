// forEach(callbackFn)
// forEach(callbackFn, thisArg)



// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) =>{
//     const result = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(a+b)
//         }, 2 * 1000);
//     })
//     return result
// };

// ratings.forEach(async (rating) => {
//     sum = await sumFunction(sum, rating);
// });

// console.log(sum);    
// Naively expected output: 14
// Actual output: 0


// sumFunction(4,6).then((result)=>console.log(result))




// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach((fruit, index, arr) => {
//     console.log(`Index: ${index}, Fruit: ${fruit}, Array: ${arr}`);
// });




const obj = { multiplier: 2 };

const numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num * this.multiplier);
}, obj); // 👈 Passing `obj` as `thisArg`
