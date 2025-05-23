// You just need to implement the countBoxes function
function countBoxes(totalBars, barsPerBox) {
    const result = Number((totalBars / barsPerBox).toFixed(0))
    return result

}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { totalBars, barsPerBox } = JSON.parse(input); // Parse input as number
    // Call our function
    const result = countBoxes(totalBars, barsPerBox);
    
    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
