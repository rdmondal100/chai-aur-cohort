
document.addEventListener('DOMContentLoaded',()=>{
    /**
 * Write your challenge solution here
*/



const toggleButton = document.getElementById("toggleButton")
const BULB_STATUS_KEY = "bulb-status"


const toggleMode = (e) => {
    
    const currentBulbStatus = (toggleButton.innerText.split(" ")).pop()

    console.log(currentBulbStatus)
    const bulb = document.getElementById("bulb")
    const body = document.getElementById("body")
    const status = document.getElementById("status")

    if (bulb && body && status && currentBulbStatus) {

        bulb.classList.toggle("off")
        body.classList.toggle("dark-mode")

        if (currentBulbStatus === "On") {
            console.log(currentBulbStatus)
            console.log(status)
            status.innerText = "Status: On"
            toggleButton.innerText = "Turn Off"
            localStorage.setItem(BULB_STATUS_KEY,JSON.stringify("Turn Off"))
            // status.innerText = "riday"
        } else {
            console.log("elase")
            status.innerText = "Status: Off"
            toggleButton.innerText = "Turn On"
            localStorage.setItem(BULB_STATUS_KEY,JSON.stringify("Turn On"))


        }
    }


}




toggleButton.addEventListener("click", toggleMode)


const savedStatus = JSON.parse(localStorage.getItem(BULB_STATUS_KEY)) || ""
const currentBtnText = toggleButton.innerText
console.log(savedStatus)
console.log(currentBtnText)

if(savedStatus !== currentBtnText){

    if(toggleButton){
        setTimeout(toggleMode, 0);
    }
}
})