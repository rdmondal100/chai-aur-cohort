// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName)
    return queue
}




console.log(addPuppy(["a", "b", "c", "d"], "MAX"))