// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values

    let keysArray = Object.keys(obj)

    keysArray = keysArray.forEach((key) => {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key]
        }
    })

    
    const isObjHasKeys = Object.keys(obj).length

    return isObjHasKeys ? obj : {}
}

console.log(cleanObject({ name: "Riday", age: 25, email: null }))