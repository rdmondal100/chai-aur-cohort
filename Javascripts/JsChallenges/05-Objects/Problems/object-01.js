// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    const studentProfile = {}
    if (typeof name === "string" && name) {
        studentProfile.name = name
    } else {
        return "Invalid input"
    }

    if (age > 5 && age) {
        studentProfile.age = age
    } else {
        return "Invalid input"
    }

    if (typeof grade === 'string' && grade) {
        studentProfile.grade = grade
    } else {
        return "Invalid input"
    }

    return studentProfile
}

console.log(createStudentProfile("Riday", 5, '1st'))
