
//get all the dom references 
const inputColor = document.getElementById('hex-color')
const selectedColor = document.getElementById("select-color")
const createBtn = document.getElementById('create-btn')
const buttonContiner = document.getElementById("all-button")
const warnText = document.getElementById("warn-text")



//the color that is expected from the input
let color = null

// get the color from the color input 
inputColor.addEventListener('change',(e)=>{
    if(e.target.value){
        color  = e.target.value
    }
})


//get the color from the select drop down
selectedColor.addEventListener('change',(e)=>{

    if(e.target.value){
        color  = e.target.value
    }
})



//create the button based on the input color
// console.log(color)
createBtn.addEventListener("click",()=>{
    console.log(buttonContiner)

    if(color){
        warnText.style.display = "none"

        const colorBtn = document.createElement("button")
        colorBtn.classList.add("color-btn")
        colorBtn.innerText = color
        colorBtn.style.backgroundColor = color
        if(buttonContiner){
            buttonContiner.append(colorBtn)
            color = null
        }
    }else{
        warnText.style.display = "block"
    }

})


// apply the functionality that apply the bg on click of the curresponding button
buttonContiner.addEventListener('click',(e)=>{
    const clickedButton = e.target
    if(clickedButton.nodeName ==='BUTTON'){
        const btnColor = clickedButton.innerText
        console.log(btnColor)
        const apply = applyBgColor(btnColor)

        apply()
        // console.log(apply)
    }
    
})



// used the clouser to apply the background
const applyBgColor = (color)=>{
    console.log(color)
    let appliedBg = color
return function (){
    document.body.style.backgroundColor = appliedBg
}
}


