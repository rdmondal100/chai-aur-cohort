// You just need to implement the totalWater function
function totalWater(waterAmounts) {
    const total = Number(waterAmounts.reduce((sum, num) => sum + num, 0))

    return total


}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    // Parse input (expected to be a JSON string array of water amounts)
    const waterAmounts = JSON.parse(input);

    // Call our function
    const result = totalWater(waterAmounts);

    
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
