

// // ✅ Number to String (Concatenation with `+`)
// const num = 10;
// console.log(num + "5"); // Output: "105"
// // Explanation: `+` operator prefers string concatenation if one operand is a string.
// // So, `10` is converted to `"10"`, then `"10" + "5"` results in `"105"`.


// // ✅ String to Number (Subtraction, Multiplication, Division)
// console.log("a" - "5"); // Output: 15
// console.log("20" - 5); // Output: 15
// // Explanation: `-` only works with numbers, so `"20"` is converted to `20`, then `20 - 5 = 15`.

// console.log("6" * 2); // Output: 12
// // Explanation: `*` only works with numbers, so `"6"` is converted to `6`, then `6 * 2 = 12`.

// console.log("30" / 3); // Output: 10
// // Explanation: `/` only works with numbers, so `"30"` is converted to `30`, then `30 / 3 = 10`.


// // ✅ Boolean to Number Conversion
// console.log(true + 1); // Output: 2
// // Explanation: `true` is treated as `1`, so `1 + 1 = 2`.

// console.log(false - "5");
// console.log(true - "5");
// console.log(true * "3");
// console.log(true - "3");
// console.log(true + null);
// console.log("__________");
// console.log(null + undefined);
// console.log(true * null);
// console.log("__________");
// console.log(false + 5); // Output: 5
// // Explanation: `false` is treated as `0`, so `0 + 5 = 5`.

// console.log(10 + false); // Output: 10
// // Explanation: `false` is treated as `0`, so `10 + 0 = 10`.


// // ✅ `null` and `undefined` in Arithmetic Operations
// console.log(null + 5); // Output: 5
// // Explanation: `null` is treated as `0`, so `0 + 5 = 5`.

// console.log(undefined + 5); // Output: NaN
// // Explanation: `undefined` is not converted to a number, so the result is `NaN` (Not a Number).


// // ✅ Loose Equality (`==`) and Type Conversion
// console.log(5 == "5"); // Output: true
// // Explanation: `==` allows type conversion, so `"5"` is converted to `5`, and `5 == 5` is `true`.

// console.log(0 == false); // Output: true
// // Explanation: `false` is treated as `0`, so `0 == 0` is `true`.

// console.log(null == undefined); // Output: true
// // Explanation: `null` and `undefined` are considered equal when using `==`.


// // ❌ Strict Equality (`===`) (No Type Conversion)
// console.log(5 === "5"); // Output: false
// // Explanation: `===` does NOT allow type conversion, so `5` (number) and `"5"` (string) are different.

// console.log(0 === false); // Output: false
// // Explanation: `===` requires both value and type to match. `0` (number) and `false` (boolean) are different.




// console.log(42 / +0); // Infinity
// console.log(42 / -0); // -Infinity
// console.log(42 / 0); 


// console.log(NaN == NaN)
// console.log(null == null)
// console.log(undefined == undefined)
// console.log(Boolean == Boolean)

// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER + 1) // 9007199254740992
// console.log(Number.MAX_SAFE_INTEGER + 2) // 9007199254740992
// console.log(Number.MAX_SAFE_INTEGER + 3) // 9007199254740994
// console.log(Number.MAX_SAFE_INTEGER + 4) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 5) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 6) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 7) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 8) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 9) //9007199254741006
// console.log(Number.MAX_SAFE_INTEGER + 10) //9007199254741006


// // JavaScript For Loop Example
// for (let i = 0; i < 5; i++) {
//     //first time: i = 0
//     let a = i++ // a= 0, i =1 ; a=2, i=3 ; a = 4, i = 5
//     console.log("a:-> " + a) // 0 ; 2 ; 4
//     console.log("i =", i); // 1 ; 3 ; 5
//     // console.log("name: "+i)


//     // after the first iteration the i become 2
// }
// console.log("__________")

// for (let i = 0; i < 5; ++i) {
//     let a = ++i // a=1, i=1; a=3, i=3; a=5, i=5
//     console.log("a:-> " + a) // 1; 3; 5
//     console.log("i =", i); // 1;3; 5
//     // console.log("name: "+i)
// }
// console.log("__________")

// for(let i = 0;i<5;i++){
//     // let a = i++
//     console.log(i) // 0, 4
//     console.log(i++) // 0,4
//     console.log(i++)// 1,5
//     // console.log(i++)
//     console.log(++i)// 3,7
//     console.log(i) // 3, 7

// }




// function dumpProps(obj, objName) {
//     let result = "";
//     for (const i in obj) {
//       result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
//   }
//   car.make = Ford
//   car.model = Mustang  



// const arr = [3, 4, 5,];
// arr.foo = "hello";
// arr[10] = 99


// console.log(arr)

// for (const i in arr) {
//     console.log(i);

// }

// console.log("_______")
// // "0" "1" "2" "foo"

// for (const i of arr) {
//     console.log(i);
// }
// // Logs: 3 5 7



// const obj = {
//     riday: "21",
//     Partho: "22",
//     raso: '44'
// }
// const arr = [3, 4, 2]

// // console.log(obj)

// for ([key, vlaue ] of Object.entries(obj)) {
//     console.log(key + vlaue)
// }
// // console.log(arr)
// for (i of arr) {
//     console.log(i)
// }


