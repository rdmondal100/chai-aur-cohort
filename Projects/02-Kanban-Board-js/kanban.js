const popover = document.getElementById("my-popover");

const popOverForm = document.getElementById("popover-container")
const inputTask = document.getElementById("input-new-task-value")
const allItemTodo = document.getElementById("all-item-todo")
const allBoardsContainer = document.getElementById("all-boards")
const boardCollections = document.querySelectorAll(".board")

const KANBAN_KEY = "RIDAY-KANBAN-BOARD"

//boards and tasks
const boards = [
    { id: "todoBoard", boardLabel: "Todo",description:"The task I have to do", themeColor:" #ffa600fb" },
    { id: "doingBoard", boardLabel: "Doing"  ,description:" The task I am doing" , themeColor:" #0d4efffb"},
    { id: "doneBoard", boardLabel: "Done" ,description:" The task I have done" , themeColor:" #00d736fb" }
];

let allTasks = {
    todoBoard:[
            { id: "1", task: "Task One", boardId: "todoBoard" , label:"Todo", updatedAt:"", createdAt:"" },

    ],
    doingBoard:[
            { id: "2", task: "Task three", boardId: "doingBoard" , label:"Doing", updatedAt:"", createdAt:"" },
            { id: "3", task: "Task four", boardId: "doingBoard" , label:"Doing", updatedAt:"", createdAt:"" },

    ],
    doneBoard:[
            { id: "5", task: "Task five", boardId: "doneBoard" , label:"Done", updatedAt:"", createdAt:"" },
            { id: "8", task: "Task six", boardId: "doneBoard" , label:"Done", updatedAt:"", createdAt:"" },

    ],
}

    // { id: 1, task: "Task One", boardId: "todoBoard" , label:"Todo", updatedAt:"", createdAt:"" },
    // { id: 2, task: "Task Two", boardId: "todoBoard" ,label:"Todo"},
    // { id: 3, task: "Task Three", boardId: "doingBoard", label:"Doing" },
    // { id: 4, task: "Task Four", boardId: "doingBoard", label:"Doing" },
    // { id: 5, task: "Task Five", boardId: "doneBoard", label:"Done" },
    // { id: 6, task: "Task Six", boardId: "doneBoard", label:"Done" }
// ];

const getAllTaskFromLocalStorage = ()=>{
    allTasks = JSON.parse(localStorage.getItem(KANBAN_KEY)) || allTasks
    console.log(allTasks)
}
getAllTaskFromLocalStorage()



// add new task
popOverForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let task = inputTask.value
    console.log(task)
    const newTask = {
        id: Date.now().toString(),
        task:task,
        boardId:"todoBoard",
        label:"Todo",
        createdAt: Date.now(),
        updatedAt: Date.now(),

    }


    const createdTask = createTask(newTask?.task,newTask?.label,newTask?.id)
    console.log(createdTask)
    if(createdTask){
        const todoBoard = document.getElementById("todoBoard")
        const allItem = todoBoard.querySelector(".all-item")
        if(allItem){
            allItem.prepend(createdTask)
            console.log(allTasks["todoBoard"])
            if(allTasks["todoBoard"] && newTask){
                allTasks["todoBoard"].unshift(newTask)
console.log(allTasks)
                localStorage.setItem(KANBAN_KEY,JSON.stringify(allTasks))
            }
            applyDrag(createdTask)

        }else{
            console.log("Failed to get todoBorad")
        }
    }else{
        console.log("Failed to create new task")
    }
    inputTask.value = ""
    popover.hidePopover()
})


//create task
const createTask = (task, label = "Todo",id) => {
    const divElement = document.createElement("div")
    divElement.classList.add("item")
    divElement.id = id
    divElement.setAttribute("draggable", true)
    if(divElement){

        divElement.innerHTML = `
            <div class="label-contaienr">
                <span class="label-icon"></span> 
                <span class="label">${label}</span> 
            </div>
            <div class="task">${task}</div>
    
                                    
    
        `
        return divElement
        // allItemTodo.prepend(divElement)
        // applyDraggToAllTask()
        // applyDraggToAllTaskOver()

    }
    else{
        return false
    }

}


//render boards and tasks
const renderBoards = ()=>{
    boards?.length && (
        boards.map((board)=>{
            const divBoardElement = document.createElement("div")
            if(divBoardElement){
                divBoardElement.classList.add("board-container")
                divBoardElement.innerHTML = `
                    <div color-scheme=${board?.themeColor} board-label=${board?.boardLabel} class="board todo-board" id=${board?.id}>
                        <div class="board-header-container">
                            <div class="board-head"> <span class="circle"  style="color:${board?.themeColor}"></span> <span class="board-label">${board?.boardLabel}</span>
                            </div>
                            <div class="board-desc">${board?.description}</div>
                        </div>
    
                        <div class="all-item " id="all-item-todo" item-label=${board?.boardLabel}>
                            
                        
                        </div>
                    </div>
                `
                allBoardsContainer.appendChild(divBoardElement)
            }
        })
    )
}
renderBoards()



//render create task button to the todo board
const renderCreateTaskBtnForTodoBoard = ()=>{
    const todoBoard = document.getElementById("todoBoard")
    if(todoBoard){
        const divAddItemElement = document.createElement("div")
        divAddItemElement.classList.add("add-item-container")
        divAddItemElement.innerHTML =  `
                    <button popovertarget="my-popover" class="add-item">

                            <span>Add item </span> <span class="plus-icon-container"> <i
                                    class="fa-solid fa-plus plus-icon"></i> </span>
                        </button>
        
                    `
        todoBoard.appendChild(divAddItemElement)
    }
}
renderCreateTaskBtnForTodoBoard()


// render tasks 
const renderTasks = ()=>{
    boards.map((board)=>{
        console.log(board?.id)
        const singleBoardTasks = allTasks[board?.id]
        console.log(singleBoardTasks)
        if(singleBoardTasks){
            singleBoardTasks.map((task)=>{
                const TheBoardDivElement = document.getElementById(`${task?.boardId}`)
                // console.log(TheBoardDivElement)
    
                if(TheBoardDivElement && task){
                    const taskContainer = TheBoardDivElement.querySelector(".all-item")
                    // console.log(taskContainer)
                    const newTask = createTask (task?.task, task?.label, task?.id)
                    // console.log(newTask)
                    if(taskContainer && newTask){
                        // console.log(newTask)
                        taskContainer.append(newTask)
                    }else{
                        console.log("Failed to get the task containr or create task")
                    }
    
                }else{
                    console.log("Failed to get the Board")
                }
    
                
                // alert("Failed to render task:: Please Try Again Later")
                
    
            })
        }
    
    })
        
}
renderTasks()



const applyDrag = (item)=>{
    // console.log(item)
    item.setAttribute("draggable", true)
    
    let theFlyingItemsParent = null
    item.addEventListener("dragstart", (e) => {
        console.log(e.target)
        const theDragItem = e.target

        
        theFlyingItemsParent = theDragItem.closest(".board").id
        console.log(theFlyingItemsParent)
        // e.dataTransfer.setDragImage(theDragItem,0,0)
        if(theDragItem.classList.contains("item")){
        
            theDragItem.classList.add("flying")
            console.log("Start the flying")
        }



    })

    item.addEventListener("dragend", (e) => {

        const theDragEndItem = e.target
        // const boardElement = theDragEndItem.closest(".board")
        // const colorScheme = boardElement.getAttribute("color-scheme")
        // console.log(colorScheme)
        // const theLabelElement = boardElement.querySelector(".label-icon")
        // console.log(theLabelElement)
        // theLabelElement.style.removeProperty("border-color");
        // theLabelElement.style.borderColor = colorScheme



        if(theDragEndItem){
            
            const flyingId = theDragEndItem.id
            
            console.log(theDragEndItem)
            const itemContianer = theDragEndItem.closest(".all-item")

            const boardElement = theDragEndItem.closest(".board")
            const boardId = boardElement.id
            console.log(boardId)
            console.log(itemContianer)
            const label = itemContianer.getAttribute("item-label")
            console.log(label)
            console.log(flyingId)

            if(boardId && (flyingId !=="undefined")){
                // console.log(Array.isArray(allTasks[theFlyingItemsParent]))
                let flyingTaskFromAllTaskBoard =allTasks[theFlyingItemsParent].find((task)=>(
                    String(task?.id) === String(flyingId)
                ))
                
                const updatedFlyingTaskParentBoardTaskList = allTasks[theFlyingItemsParent].filter((task)=>  String(task?.id) !== String(flyingId))
                allTasks[theFlyingItemsParent]=updatedFlyingTaskParentBoardTaskList
                console.log(updatedFlyingTaskParentBoardTaskList)

                //find the new postion of the task in new board and update the board task
                const newBoardsAllItemLIst = itemContianer.querySelectorAll(".item")
                const newIndex = Array.from(newBoardsAllItemLIst).findIndex((item,index,arr)=>{

                    // console.log(item.id)
                    // console.log(flyingId)
                    if(item?.id === flyingId){
                        // console.log(item)
                        const index = arr.indexOf(item)
                        return  String(index)
                    }
                })
                console.log(newIndex)

                if(newIndex !== -1){
                    console.log("Added ")
                    console.log(flyingTaskFromAllTaskBoard)
                    flyingTaskFromAllTaskBoard = {...flyingTaskFromAllTaskBoard,boardId:boardId,label:label}
                    console.log(flyingTaskFromAllTaskBoard)
                    allTasks[boardId].splice(newIndex,0,flyingTaskFromAllTaskBoard)
                }

                console.log(allTasks)


                localStorage.setItem( KANBAN_KEY,JSON.stringify(allTasks))
            }
            
            console.log(flyingId)
            theDragEndItem.classList.remove("flying")
            console.log("End the flying")
        }
    })
}




const applyDraggToAllTask = () => {
    const allItems = document.querySelectorAll(".item")

    // drag the items 
    allItems.forEach((item) => {
        applyDrag(item)
    })
}


const applyDraggToAllTaskOver = () => {

    // drag the element and drop it
    allBoardsContainer.addEventListener('dragover', (e) => {
        e.preventDefault()
        const targetElement = document.elementFromPoint(e.clientX, e.clientY);
        const flyingItem = document.querySelector(".flying")

        if (targetElement.classList.contains('item')) {
            // console.log(targetElement)
            const closestItemContainer = targetElement.closest(".all-item")
            // console.log(closestItemContainer)
            console.log(flyingItem)
            const label = closestItemContainer.getAttribute("item-label")
            console.log(label)
            closestItemContainer.insertBefore(flyingItem, targetElement)

            const flyingElementLabel = flyingItem.querySelector(".label")

            // const closestBoardFlying = flyingElementLabel.closest(".board")
            // // console.log(closestBoardFlying)
            // const newLabelContent = closestBoardFlying.querySelector(".board-label").innerText
            // console.log(newLabelContent)

            flyingElementLabel.innerText = label



        } else if (targetElement.classList.contains('all-item')) {
            // console.log(targetElement)
            targetElement.appendChild(flyingItem)

            const flyingElementLabel = flyingItem.querySelector(".label")
            const closestBoardFlying = flyingElementLabel.closest(".board")
            const newLabelContent = closestBoardFlying.querySelector(".board-label").innerText
            flyingElementLabel.innerText = newLabelContent

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



applyDraggToAllTask()
applyDraggToAllTaskOver()