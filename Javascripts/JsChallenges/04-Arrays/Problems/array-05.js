// You just need to implement the sortBooks function
function sortBooks(books) {
    // Sort the books alphabetically and return the updated list
    books.sort((a,b)=>a.localeCompare(b))
    return books
}


console.log(sortBooks(["Math", "English", "Bangla"]))