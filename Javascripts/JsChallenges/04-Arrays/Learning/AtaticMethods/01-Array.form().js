console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


// Syntax 

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)




const taxCalculator = {
    taxRate: 0.1, // 10% tax
    applyTax(price) {
        return price + price * this.taxRate;
    }
};

// Using `thisArg` to make sure `this` refers to `taxCalculator`
const prices = [100, 150, 200];
const finalPrices = Array.from(prices, taxCalculator.applyTax, taxCalculator);

console.log(finalPrices); // ✅ [110, 165, 220]
