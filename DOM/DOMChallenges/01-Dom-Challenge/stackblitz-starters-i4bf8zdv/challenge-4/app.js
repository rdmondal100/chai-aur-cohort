/**
 * Write your challenge solution here
 */

document.addEventListener('DOMContentLoaded', () => {
    const ASSIGNMENT4_TODO = "assignment_4_todo"
    let allTaskLists = JSON.parse(localStorage.getItem(ASSIGNMENT4_TODO)) || [
        
        // { id: "1", text: "Complete the challange", createdAt: Date.now(), updatedAt: Date.now(), completed: false },
        // { id: "2", text: "Go to market", createdAt: Date.now(), updatedAt: Date.now(), completed: false },
        // { id: "3", text: "Finished the assignment", createdAt: Date.now(), updatedAt: Date.now(), completed: false },
    
    ]

    //total tasks and completed task
    const updateTotalTAskCount = (count) => {
        const totalTasks = document.getElementById("totalTasks")
        totalTasks.innerHTML = `Total tasks: ${count}`

    }
    const updateCompletedTaskCount = (updatedAllTasklists = []) => {
        let completedTaskCount = updatedAllTasklists.reduce((acc,item)=>{
            if(item?.completed){
                acc++
            }
            return acc
    },0)
        const completedTasks = document.getElementById("completedTasks")
        completedTasks.innerHTML = `Completed: ${completedTaskCount}`

    }
console.log(allTaskLists)
    let totalTaskCount = allTaskLists.length


    updateTotalTAskCount(totalTaskCount)
    updateCompletedTaskCount(allTaskLists)

    const createTodoElement = (todo) => {
        const divElement = document.createElement("div")
        divElement.classList.add("task-item")
        if (todo?.completed) {
            divElement.classList.add('completed')
        }
        divElement.id = todo?.id
        console.log(todo?.completed)
        divElement.innerHTML = `
        <input type="checkbox"  ${(todo?.completed && 'checked=true')} class="complete-checkbox" id="complete-${todo?.id}">
        <div class="todo task-text ">${todo?.text}</div>
        <i class="fa-solid fa-trash delete delete-button" id="delete-${todo?.id}"></i>
        `

        return divElement
    }


    const taskContainer = document.getElementById("taskList")
    const emptyLlist = taskContainer.querySelector(".empty-list")

    // console.log(emptyLlist)
    //render all tasks
    if (totalTaskCount) {
        emptyLlist.style.display = "none"

        allTaskLists.map((todo) => {
            const newDivElement = createTodoElement(todo)
            taskContainer.prepend(newDivElement)

            //delete complete
            newDivElement.addEventListener('click', (e) => {

            })
        })


    } else {
        emptyLlist.style.display = "block"
    }


    const addButton = document.getElementById("addButton")
    const taskInputValue = document.getElementById("taskInput")
    const addNewTAsk = () => {
        if(totalTaskCount ===0){
            emptyLlist.style.display = "none"

        }
        const inputValue = taskInputValue.value.trim()
        if (inputValue) {
            const newTodo = {
                id: Date.now().toString(),
                text: inputValue,
                completed: false,
                createdAt: Date.now(),
                updatedAt: Date.now
            }


            const newTodoElement = createTodoElement(newTodo)
            if (newTodoElement) {
                allTaskLists.push(newTodo)
                localStorage.setItem(ASSIGNMENT4_TODO, JSON.stringify(allTaskLists))
                taskContainer.prepend(newTodoElement)
                taskInputValue.value = ""
            }
        }

        totalTaskCount++
        updateTotalTAskCount(totalTaskCount)

    }
    addButton.addEventListener('click', addNewTAsk)
    taskInputValue.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && taskInputValue.value.trim()) {
            addNewTAsk()
        }

    })


    taskContainer.addEventListener('click', (e) => {

        //handle completed task
        if (e.target.classList.contains("complete-checkbox")) {
            const todoElementId = String(e.target.id)
            const todoId = todoElementId.split("-").pop()
            const isChecked = e.target.checked
            // console.log(todoId)
            // console.log(e.target.checked)

            const parentTaskItem = e.target.closest(".task-item")
            const targetedTask = parentTaskItem.querySelector(".task-text")
            console.log(targetedTask)

            if (isChecked) {
                parentTaskItem.classList.toggle("completed")
                allTaskLists = allTaskLists?.map((todo) => {
                    if (todo.id === todoId) {
                        console.log(todo)
                        return {
                            ...todo, completed: true
                        }
                    }
                    return todo
                })
                console.log(allTaskLists)
                if (allTaskLists) {
                    localStorage.setItem(ASSIGNMENT4_TODO, JSON.stringify(allTaskLists))
                    
                    updateCompletedTaskCount(allTaskLists)


                }

            } else {
                parentTaskItem.classList.toggle("completed")
                allTaskLists = allTaskLists?.map((todo) => {
                    if (todo.id === todoId) {
                        return {
                            ...todo, completed: false
                        }
                    }
                    return todo
                })
                localStorage.setItem(ASSIGNMENT4_TODO, JSON.stringify(allTaskLists))
                updateCompletedTaskCount(allTaskLists)


            }

        }


        //handle delete
        if (e.target.classList.contains("delete-button")) {
            const clickedDeleteBtn = e.target
            const parentTodoItem = clickedDeleteBtn.closest(".task-item")
            const todoId = String(clickedDeleteBtn.id).split("-").pop()

            allTaskLists = allTaskLists.filter((todo) => todo?.id !== todoId)
            console.log(allTaskLists)
            if (allTaskLists && todoId) {
                localStorage.setItem(ASSIGNMENT4_TODO, JSON.stringify(allTaskLists))
                // const allTaskArrayNodeElement = taskContainer.querySelectorAll('.task-item')
                parentTodoItem.remove()

            }

            // console.log(allTaskArrayNodeElement)
            // console.log(todoId)
            totalTaskCount--
            updateTotalTAskCount(totalTaskCount)
            if(totalTaskCount ===0){
                emptyLlist.style.display = "block"

            }

            //update the completed count
            updateCompletedTaskCount(allTaskLists)


        }

    })




})



