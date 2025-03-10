// // You just need to implement the isLeapYear function


// function isLeapYear(year) {
//     // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
//     if ((year % 4) === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap Year"
//             } else return "Not a Leap Year"
//         } else {
//             return "Leap Year"
//         }
//     } else {
//         return "Not a Leap Year"
//     }
// }

// console.log(isLeapYear(1900))


// // You just need to implement the trafficLightAction function
// function trafficLightAction(color) {
//     // Return "Stop", "Slow Down", or "Go" based on the traffic light color

//     const f = color[0].toUpperCase()
//     color = color.split('')
//     color[0]=f
//     color = color.join("")
//     console.log(color)

//     switch (color) {
//         case "Red":
//             return "Stop"
//         case "Yellow":
//             return "Slow Down"
//         case "Green":
//             return "Go"
//         case "Blue":
//             return "Invalid Color"
//         default:
//             return -1
//     }
// }

// trafficLightAction("red")




// // You just need to implement the calculator function
// function calculator(num1, num2, operator) {
//     // Perform basic arithmetic operations using switch case
//     switch(operator){
//       case "+":
//         return num1 + num2
//       case "-":
//         return num1 - num2
//       case "*":
//         return num1 * num2
//       case "/":
//         if(num2 ==0){
//           return "Cannot divided by zero"
//         }
//         return num1/num2
//       default:
//         return "Invalid operator"
//     }
//   }

//  console.log( calculator(10,0,'/'))





// You just need to implement the workingDays function
// function workingDays(days) {
//   // your code here
//   let cout = 0
//   for (let i = 0; i < days.length; i++) {
//     // console.log(days)
//     let currentDay = days[i].toLowerCase()
//     console.log(currentDay)
//     if ((currentDay == 'saturday') || (currentDay == "sunday")) {

//       continue
//     }
//     cout++;
//   }
//   return cout
// }



// console.log(workingDays(["Saturday","Sunday"]))




// function totalStars(starLevels) {
//   let count = 0
//   for (let i = 0; i < starLevels.length; i++) {
//     if (starLevels[i].length > 1) {
//       count += starLevels[i].length

//     } else {
//       // console.log("Riday")
//       count++
//     }
//   }
//   return count
// }



// console.log(totalStars([["*", "*", "*", "*", "*"], ["*", "*"], ["*"]]))



// function totalPrice(prices) {
//   const result = prices.reduce((sum, p) => sum + p, 0)
//   return result

// }


// console.log(totalPrice([5, 10, 15]))

// function shinyDiamondRug(n) {
//     for (let row = 1; row <= ((2 * n) - 1); row++) {

//         let whitespace = row >= n ? (row - n) : (n - row)
//         let starCount = row <= n ?  ((2 * row) - 1) : (2*((2*n)-row)-1)


//         let space = ""
//         let stars = ""
//         for (let j = 1; j <= whitespace; j++) {
//             space += " "
//         }
//         for (let col = 1; col <= starCount; col++) {
//             // console.log(starCount)
//             stars += "*"
//         }
//         process.stdout.write(space + stars.trimEnd());
//         if(row != (2*n-1)){
//             console.log()
//         }


//     }

// }
// shinyDiamondRug(100)

// function shinyDiamondRug(n) {

//     let output = ''
//     for (let row = 1; row <= ((2 * n) - 1); row++) {
//         let whitespace = row >= n ? (row - n) : (n - row);
//         let starCount = row <= n ? ((2 * row) - 1) : (2 * ((2 * n) - row) - 1);

//         let space = " ".repeat(whitespace);
//         let stars = "*".repeat(starCount);

//         if(row!= (2*n)-1){

//             output += (space + stars +'\n');
//         }else{
//             output += (space + stars);
//         }

//         // if (row != (2 * n - 1)) {
//         //     console.log();
//         // }
//     }
//     return output
// }
// console.log(shinyDiamondRug(3))





// function invertedMountain(n) {

//     let output = ""
//     for (let row = n; row > 0; row--) {
//         for (let col = row; col > 0; col--) {
//             output = output + "*"
//         }
//         if (row != 1) {
//             output = output + '\n'
//         }

//     }
//     return output
// }
// console.log("_______")
// console.log(invertedMountain(4))
// console.log("_______")


