function invertedMountain(n) {

    let output = ""
    for (let row = n; row > 0; row--) {
        for (let col = row; col > 0; col--) {
            output = output + "*"
        }
        if (row != 1) {
            output = output + '\n'
        }

    }
    return output

}

// You just need to implement the invertedMountain function
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = invertedMountain(n);  // Call our function
    process.stdout.write(result);  // Output the result
});
