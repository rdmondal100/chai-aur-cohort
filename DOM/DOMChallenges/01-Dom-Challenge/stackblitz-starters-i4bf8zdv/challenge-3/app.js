/**
 * Write your challenge solution here
 */


document.addEventListener('DOMContentLoaded', () => {

    const formContainer = document.querySelector(".form-container")
    const inputsArray = Array.from(formContainer.querySelectorAll('input'))
    inputsArray.push(formContainer.querySelector("textarea"))
    console.log(inputsArray)

    // const nameInput = document.getElementById("nameInput")
    // const jobInput = document.getElementById("jobInput")
    // const ageInput = document.getElementById("ageInput")
    // const bioInput = document.getElementById("bioInput")

    if(inputsArray.length){
        inputsArray.map((inputItem)=>{
            const index = String(inputItem.id).search('Input')
            console.log(index)
            const DisPlayNameId = inputItem.id.slice(0,Number(index)) +"Display"
            console.log(DisPlayNameId)
            inputItem.addEventListener('input',(e)=>{
                const displayElement = document.getElementById(DisPlayNameId)
                console.log(displayElement)
                let currentInputValue = String(e.target.value).trim()
                displayElement.innerText = currentInputValue || "Not provided"
            })
        })
    }

})