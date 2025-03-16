/**
 * Write your challenge solution here
 */


document.addEventListener('DOMContentLoaded', () => {

    const mainHeading = document.getElementById("mainHeading")

    const btnContainer = document.querySelector(".color-buttons")
    console.log(btnContainer)


    if (btnContainer) {
        btnContainer.addEventListener('click', (e) => {
            if (e.target.matches("button")) {
                let color = e.target.innerText
                if (color === "Reset") {
                    color = "Black"
                }
                if (color) {

                    changeMainHeadingColor(color)
                }
            }
        })
    }

    const changeMainHeadingColor = (color) => {
        if (color) {
            mainHeading.style.color = color
        }
    }


})