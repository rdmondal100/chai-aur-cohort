// You just need to implement the totalPrice function
function totalPrice(prices) {
    const result = prices.reduce((sum, p) => sum + p, 0)
    return result
}

// Please don't remove the code below
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    // Parse input (expected to be a JSON string array of prices)
    const prices = JSON.parse(input);

    // Call our function
    const result = totalPrice(prices);

    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
