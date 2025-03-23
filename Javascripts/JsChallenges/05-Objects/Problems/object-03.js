

// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
    if(typeof product === "object"){
        const isDiscountedProduct = Object.hasOwn(product,'discount')
        return isDiscountedProduct?(true):(false)
    }

}
