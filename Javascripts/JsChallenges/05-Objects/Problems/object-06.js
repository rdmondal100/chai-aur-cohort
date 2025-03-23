// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    return Object.assign({},obj1,obj2)
}
console.log(mergeObjects({name:"Riday",age:22},{email:"test@gmail.com",age:23}))
