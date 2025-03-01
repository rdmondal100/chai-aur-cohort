// let expenses = [
//     { description: "Groceries", amount: 50, category: "Food" },
//     { description: "Electricity Bill", amount: 100, category: "Utilities" },
//     { description: "Dinner", amount: 30, category: "Food" },
//     { description: "Internet Bill", amount: 50, category: "Utilities" },
// ];



// let expenseReport = expenses.reduce((report, expense) => {
//     report[expense.category] = expenseReport
// }, {})




// let tasks = [
//     { description: "Write report", completed: false, priority: 2 },
//     { description: "Send email", completed: true, priority: 3 },
//     { description: "Prepare presentation", completed: false, priority: 1 },
// ];


// let pendingSortedTAsks = tasks
//     .filter((task) => !task.completed)
//     .sort((a, b) => a.priority - b.priority)



let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
];


let averageMovieRatings = movieRatings.map((movie) => {
    let allratings = {}
    let total = movie.ratings.reduce((sum,rate)=>sum+rate,0)
    let average = total/movie.ratings.length

    return movie.ratings = average.toFixed(2)
})

console.log(movieRatings)