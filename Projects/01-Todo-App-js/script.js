

document.addEventListener("DOMContentLoaded",function(){



const todosContainer = document.getElementById("todos-container")
let localTodos = []


    localTodos = JSON.parse(localStorage.getItem('local-todos')) || []
    console.log(typeof (localTodos))
    if (localTodos.length) {
        localTodos?.map((todo) => {
            const divElement = document.createElement("div")
            divElement.id = todo?.id
            divElement.classList.add('todo')
            divElement.innerHTML = `
                    <span> 
                        <input type="checkbox" class="check-box" id="check-${todo?.id}"> 
                    </span>
                <div class="todo-task">${ todo?.task} </div>
                <div id="edit-delete-container">
                    <i class="fa-solid fa-pen-to-square edit" id="edit-${todo?.id}"></i>
                    <i class="fa-solid fa-trash delete" id="delete-${todo?.id}"}></i>
                </div>
            `
            todosContainer.prepend(divElement)

            if(todo.completed){
                console.log(todo)
                const completedTodo = document.getElementById(`${todo?.id}`)
                const completedTodoCheckBox = document.getElementById(`check-${todo?.id}`)
                completedTodoCheckBox.checked = true
                completedTodo.classList.add("checked")
                console.log("checked")
                

            }

        })

        
    }




//theme button
const themeButton = document.getElementById("theme-btn")
if (localStorage.getItem("theme-mode") === "dark-mode") {
    document.body.classList.add("dark-mode")
}
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme-mode", "dark-mode")
    } else {
        localStorage.setItem("theme-mode", "light-mode")
    }
})




// get the input value of todo input 
const addTodoBtn = document.getElementById("add-todo-btn")
addTodoBtn.addEventListener('click', () => {
    const todoInput = document.getElementById("add-todo-input")
    const todosContainer = document.getElementById("todos-container")

    if (todoInput.innerText.trim()) {
        const todo = {
            id: Date.now().toString(),
            task: todoInput.innerText,
            completed: false
        }
        localTodos.push(todo)
        localStorage.setItem("local-todos", JSON.stringify(localTodos))


        
        const divElement = document.createElement("div")
        divElement.id = todo?.id
        divElement.classList.add('todo')
        divElement.innerHTML = `
                <span> 
                    <input type="checkbox" class="check-box" id="check-box"> 
                </span>
            <div class="todo-task">${ todo?.task} </div>
            <div id="edit-delete-container">
                <i class="fa-solid fa-pen-to-square edit" id="edit-${todo?.id}"></i>
                <i class="fa-solid fa-trash delete" id="delete-${todo?.id}"></i>
            </div>
        `
        todosContainer.prepend(divElement)
        todoInput.innerText = " "
        console.log(todoInput.innerText)
        

        const todosPlaceholder = document.getElementById("todo-placeholder")
        console.log(todosPlaceholder)
        if(todosPlaceholder){
            todosPlaceholder.remove()
        }
        
    }
})



// handle placeholder 
const todoInput = document.getElementById("add-todo-input")
const enterTodoPlaceholder = document.getElementById("todo-input-placeholdere")

todoInput.addEventListener("input", () => {

    if (todoInput.innerText.trim()) {
        enterTodoPlaceholder.style.display = "none"
    }

    todoInput.addEventListener("blur", () => {
        if (todoInput.innerText.trim() =="") {
            enterTodoPlaceholder.style.display = "block"
        }
    })
})



//add completed functionality
let isEditing = false
todosContainer.addEventListener('click', (e) => {
    const element = e.target
    const todo =element.closest(".todo")
    const todoId = todo?.id
    const clickedTodo = localTodos.find((todo)=>todo.id==todoId)

    const editBtnHit =element.matches(`#edit-${todo?.id}`)
    const deleteBtnHit =element.matches(`#delete-${todo?.id}`)


    // edit the todo 
    if(!clickedTodo?.completed){
        if(editBtnHit && !isEditing){
            const editBtn = document.getElementById(`edit-${todo?.id}`)
            console.log(editBtn)
    
            isEditing = true
            console.log(editBtn)
            const todoTaskBox =todo.querySelector(".todo-task")
            console.log(todoTaskBox)
    
            // make the todo editable
            todoTaskBox.setAttribute("contenteditable",true)
            //move the cursor to the end of the content
            todoTaskBox.focus()
    
            const range = document.createRange()
            console.log(range)
            const selection = window.getSelection()
            range.selectNodeContents(todoTaskBox)
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
    
    
            
            
            element.outerHTML = `
            <i class="fa-solid fa-floppy-disk saveBtn" id="save-${todo?.id}"></i>
            `
            
                const saveBtn = document.getElementById(`save-${todo?.id}`)
    
                
                
                saveBtn.addEventListener('click',(e)=>{
                    const prevTask = clickedTodo.task
                    const newTask = todoTaskBox.innerText
                    const saveTarget = e.target
                    isEditing = false
    
                    if(prevTask ==newTask){
                        console.log(prevTask)
                        console.log(newTask)
                        saveTarget.outerHTML = `
                        <i class="fa-solid fa-pen-to-square edit" id="edit-${todo?.id}"></i>
                    `
                    todoTaskBox.setAttribute("contenteditable",false)
    
                        return
                    }
                    console.log(todoTaskBox.innerText)
                    const updatedTodo = {...clickedTodo,task:todoTaskBox.innerText}
                    const otherTodos = localTodos.filter((todo)=>todo?.id!=todoId)
                    const updatedTodoList = [...otherTodos,updatedTodo]
                    
                    console.log(updatedTodo)
                    console.log(otherTodos)
                    console.log(updatedTodoList)
                    localStorage.setItem('local-todos',JSON.stringify(updatedTodoList))
                    saveTarget.outerHTML = `
                        <i class="fa-solid fa-pen-to-square edit" id="edit-${todo?.id}"></i>
                    `
                    todoTaskBox.setAttribute("contenteditable",false)
        
                    isEditing = false
                    location.reload()
    
                    
                })
            
            return
        }       
    }

    // delete the todo 
    if(deleteBtnHit && !isEditing){
        const deleteBtn = document.getElementById(`delete-${todo?.id}`)
        console.log(deleteBtn)
        console.log(todoId)

        const updatedTodoListAfterDelete = localTodos.filter((todo)=>todoId !=todo?.id)
        console.log(updatedTodoListAfterDelete)
        localStorage.setItem("local-todos",JSON.stringify(updatedTodoListAfterDelete))

        location.reload()
        return
    }


    // todo completed 
    if (todo && !isEditing && !deleteBtnHit) {
    
        const checkElement = todo.querySelector('input[type="checkbox"]')
        // const otherTodos = localTodos.filter((todo)=>todoId != todo?.id)
        if(checkElement){
            console.log("cliked")
            console.log(checkElement.checked)
            if(checkElement.checked){
                todo.classList.remove("checked")
                console.log(localTodos)
                checkElement.checked = false
                // updatedTodo = {...clickedTodo,completed:false}
                // const updatedTodoList = [...otherTodos,updatedTodo]
                localTodos = localTodos.map((todo)=>{
                    if(todo?.id == todoId){
                        return {...todo,completed:false}
                    }
                    return todo
                })
                localStorage.setItem("local-todos",JSON.stringify(localTodos))


            }else{
                console.log(localTodos)
                todo.classList.add("checked")
                checkElement.checked = true
                // const updatedTodoList = [...otherTodos,updatedTodo]
                // localStorage.setItem("local-todos",JSON.stringify(updatedTodoList))
                
                localTodos = localTodos.map((todo)=>{
                    if(todo?.id == todoId){
                        console.log(todo)
                        return {...todo,completed:true}
                    }
                    return todo
                })
                console.log(localTodos)
                localStorage.setItem("local-todos",JSON.stringify(localTodos))



            }
            console.log(checkElement.checked)
            
        }
        
        console.log(checkElement)
    }
})



// is any todo exists 
console.log(todosContainer)
const isTodosExists = todosContainer.children.length
console.log(isTodosExists)
if(!isTodosExists){
    const todosPlaceholder = document.createElement("div")
    todosPlaceholder.id = 'todo-placeholder'
    todosPlaceholder.innerHTML = `
        <h1 class="todo-placeholder"> No todos is there!!🙅 </h1>
    `
    todosContainer.appendChild(todosPlaceholder)
}


})