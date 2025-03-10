// const asyncIterable = (async function* () {
//     for (let i = 0; i < 5; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 10 * i));
//         yield i;
//     }
// })();

// Array.fromAsync(asyncIterable).then((array) => console.log(array));
// // [0, 1, 2, 3, 4]




// const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/todos/2"
// ];

// Array.fromAsync(urls, async (url) => {
//     const response = await fetch(url);
//     return response.json();
// }).then(console.log);


// const { setExperimentalFeatures } = require('node:util');
// setExperimentalFeatures(['array-from-async']);

// async function run() {
//     console.log(await Array.fromAsync([Promise.resolve(1), Promise.resolve(2)]));
// }
// run();

// console.log(typeof Array.fromAsync);
