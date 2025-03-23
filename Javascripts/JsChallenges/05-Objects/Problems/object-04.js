

// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
    const isUsername = Object.hasOwn(user,'username') 
    const isPassword = Object.hasOwn(user,'password')

    if(isUsername){
        if(isPassword){
            delete user.password
        }
        return user
    }
}