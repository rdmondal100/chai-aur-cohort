

// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    obj = Object(obj)
    const keysQueue = String(keyPath).split(".")
    let value = Object.assign({},obj)
    while (keysQueue.length) {
        const currentKey = keysQueue.shift()
        value = value[currentKey]
        if(value === undefined){
            return "Key not found"
        }
        
    }
    return value

}

console.log(getNestedValue(
    {
        name: {
            city: {
                dist: "Khulna"
            }
        }
    }, "name.city.dist"))