

// // You just need to implement the deepClone function
// function deepClone(obj) {
//     // Return a deep copy of obj
//     const deepCopied = structuredClone(obj)
//     return deepCopied
// }


// You just need to implement the deepClone function
function deepClone(obj) {
    // Return a deep copy of obj
    let deepCopied = { ...obj }
    // console.log("first copied shallow")
    // console.log(deepCopied)
    const objKeysArray = Object.keys(obj)
    objKeysArray.forEach((key) => {
        if (typeof deepCopied[key] === 'object') {
            if (Array.isArray(deepCopied[key])) {
                deepCopied[key] = [...deepCopied[key]]
            }else{
                deepCopied[key] = { ...deepCopied[key] }
            }
        }
    })

    return deepCopied

}

// console.log(deepClone({ name: "Riday", age: 44, address: { city: "Dhaka", zip: 1906 } }))

const obj1 = { name: "Riday", age: 44, address: { city: "Dhaka", zip: 1906 }, items: [1, 2, 3] }

const clonedObj1 = deepClone(obj1)
clonedObj1.address.city = "Khulna"
console.log(obj1)
console.log(clonedObj1)