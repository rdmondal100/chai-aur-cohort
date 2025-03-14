

// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list

    const updatedList = foodList.filter((item) => item.toLowerCase() !== "burger")
    return updatedList

}


console.log(filterHealthy(["alad", "burger", "updle", "Burger"]))

