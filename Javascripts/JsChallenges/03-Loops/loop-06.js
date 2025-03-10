// You just need to implement the workingDays function
function workingDays(days) {
    // your code here
    let cout = 0
    for (let i = 0; i < days.length; i++) {
        // console.log(days)
        let currentDay = days[i].toLowerCase()
        if ((currentDay == "saturday") || (currentDay == "sunday")) {

            
            continue
        }
        cout++;
    }
    return cout
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    // Parse input (expected to be a JSON string array of days)
    const days = JSON.parse(input);

    // Call our function
    const result = workingDays(days);

    // Output the result as a JSON string
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
