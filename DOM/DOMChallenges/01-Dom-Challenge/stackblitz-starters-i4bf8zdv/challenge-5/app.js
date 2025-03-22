/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


//render the images on the page start
const carouselTrack = document.getElementById("carouselTrack")
images.map((item, index) => {

  const newImageElement = document.createElement("img")
  newImageElement.setAttribute('src', item.url)
  newImageElement.classList.add("carousel-slide")
  carouselTrack.appendChild(newImageElement)
  // console.log(newImageElement)
})
//render the images on the page start


//render crouselNav start
const carouselNav = document.getElementById("carouselNav")
for (let i = 0; i < images.length; i++) {
  const crousalNavItem = document.createElement("span")
  crousalNavItem.classList.add("carousel-indicator")
  carouselNav.appendChild(crousalNavItem)
}
//render crouselNav start


const allSlidesItem = Array.from(carouselTrack.querySelectorAll(".carousel-slide"))
const crouselIntedicatorArray = Array.from(carouselNav.querySelectorAll(".carousel-indicator"))




let currentSlideIndex = 0

//active the rousel nav item
const activeCrouselIndicator = (targetCrousel) => {
  crouselIntedicatorArray.forEach((item, index) => {
    item.classList.remove("active")

    if (index === targetCrousel) {
      item.classList.add("active")
    }
  })
}

//show slide

const showSlide = (n = 0) => {
  const caption = document.getElementById("caption")
  console.log("Current Slide Index: ", n);
  //set the caption for the desired picture
  let curresPondingCaption = null
  if (n > -1 && n < images.length) {
    curresPondingCaption = images[n]?.caption
  }

  allSlidesItem.forEach((item, index) => {

    item.style.transform = `translateX(${(index - n) * 100}%)`;
    if (curresPondingCaption) {
      caption.innerText = curresPondingCaption
    }
    if (index === n) {
      console.log("Active Slide: " + index);
      activeCrouselIndicator(index)
    }
  });
};
showSlide(0)


// click the nav functionality
carouselNav.addEventListener('click', (e) => {
  if (e.target.classList.contains("carousel-indicator")) {
    console.log(e.target)
    currentSlideIndex = crouselIntedicatorArray.indexOf(e.target)
    showSlide(currentSlideIndex)
  }
})


const nextButton = document.getElementById("nextButton")
const prevButton = document.getElementById("prevButton")


nextButton.addEventListener('click', () => {
  currentSlideIndex = currentSlideIndex + 1
  if (currentSlideIndex > allSlidesItem.length - 1) {
    currentSlideIndex = currentSlideIndex - allSlidesItem.length
  }


  // console.log(currentSlideIndex)
  showSlide(currentSlideIndex)
  // console.log("next btn")
})

prevButton.addEventListener('click', () => {
  console.log("______________")
  console.log(currentSlideIndex)
  currentSlideIndex = currentSlideIndex - 1
  console.log(currentSlideIndex)

  if (currentSlideIndex < 0) {
    currentSlideIndex = (allSlidesItem.length) + currentSlideIndex
    console.log("Changed  ", +currentSlideIndex)
  }
  console.log(currentSlideIndex)
  showSlide(currentSlideIndex)
  console.log("Prev btn")

  console.log("______________")

})

// Autoplay
const autoPlayContainer = document.querySelector(".auto-play-control");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let autoplayInterval = null;


if (autoPlayButton && autoPlayContainer) {
  autoPlayButton.addEventListener("click", (e) => {
    const targetElement = e.target;

    // If autoplay is active, stop it
    if (targetElement.hasAttribute("stop")) {
      clearInterval(autoplayInterval);
      autoPlayButton.innerText = "Start Auto Play";
      autoPlayButton.removeAttribute("stop");
      timerDisplay.classList.add("hide-timerDisplay");
      return;
    }

    // Start autoplay
    autoPlayButton.innerText = "Stop Auto Play";
    autoPlayButton.setAttribute("stop", "true");
    timerDisplay.classList.remove("hide-timerDisplay");

    const executeNext = (duration, arr) => {
      let seconds = duration;

      autoplayInterval = setInterval(() => {
        if(seconds>0){
          timerDisplay.innerText = `Next slide in ${seconds}s`;
        }

        
        if (seconds === 0) {

            clearInterval(autoplayInterval); 
            if (currentSlideIndex >= arr.length - 1) {
              currentSlideIndex = 0;
            } else {
              currentSlideIndex++;
            }
            timerDisplay.innerText = `Next slide in ${duration}s`;

            showSlide(currentSlideIndex);

            if (autoPlayButton.hasAttribute("stop")) {
              executeNext(duration, arr);
            }
        }

        seconds--;
      }, 1000);
    };

    executeNext(5, allSlidesItem);
  });
}
