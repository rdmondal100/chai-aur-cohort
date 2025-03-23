// You just need to implement the addCarColor function
function addCarColor(car, color) {
    // Add color property to the car object
    const isCarValid = car.hasOwnProperty('brand') && car.hasOwnProperty('model')

    const isValidColor = color !== "" && typeof color === 'string'


    if (isCarValid && isValidColor) { 
        car.color = color
        return car
    }
    
    return "Invalid color"


}

console.log(addCarColor({
    brand: "BMW",
    model: "syx"
},"Red"))