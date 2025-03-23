// You just need to implement the objectToArray function
function objectToArray(obj) {
    // Convert the object into an array of key-value pairs

    const arryOfObject = Object.entries(obj)

    if(arryOfObject.length){
        return arryOfObject
    }else{
        return []
    }

}