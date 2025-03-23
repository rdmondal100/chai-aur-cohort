// Object.assign(target, ...sources)


// The Object.assign() method is used to copy properties from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }



const obj1 = { x: 10 };
const obj2 = { y: 20 };
const obj3 = { z: 30 };

const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { x: 10, y: 20, z: 30 }




const original = { name: "Alice", age: 25, fab: ["a", "b", "c"] };
const clone = Object.assign({}, original);

clone.age = 30;
clone.fab[0] = "Riday"
console.log(original);
console.log(clone);


const obj5 = {
    name: "Riday",
    lang: {
        eng: "EN",
        bang: "BN"
    }
}
const obj4 = structuredClone(obj5);
obj4.lang.eng = "English"
delete obj4.lang

console.log(obj5)

console.log(obj4)



const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }



// _.cloneDeep()
const student = {
    name: "Riday mondal",
    id: "21CSE006",
    age: 22
}
const st1 = 
console.log(st1)