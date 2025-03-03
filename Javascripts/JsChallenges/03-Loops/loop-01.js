// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
    // write your code here
    let distributeGifts = 0
    for (let i = 0; i < totalGifts; i++) {
        if (distributeGifts === friends) {
            return distributeGifts
        }
        distributeGifts++
    }
    return distributeGifts
}

