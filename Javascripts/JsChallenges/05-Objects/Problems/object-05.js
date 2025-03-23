// You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    if(typeof user === 'object'){
        const countProperties = Object.keys(user).length
        return countProperties
    }
    }

    