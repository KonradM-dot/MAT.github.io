window.onload = function () {

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const startPause = document.querySelector('#startPause');
const auto = true;
const pause = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
// Get current class
const current = document.querySelector('.current');
// Remove current class
current.classList.remove('current');
// Check for next slider
if(current.nextElementSibling) {
  // Add current to next sibling
  current.nextElementSibling.classList.add('current');
} else {
  // Add current to start
  slides[0].classList.add('current');
}
setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
// Get current class
const current = document.querySelector('.current');
// Remove current class
current.classList.remove('current');
// Check for prev slider
if(current.previousElementSibling) {
  // Add current to prev sibling
  current.previousElementSibling.classList.add('current');
} else {
  // Add current to last
  slides[slides.length - 1].classList.add('current');
}
setTimeout(() => current.classList.remove('current'))
}

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Keyboard right arrow navigation
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 39) {
    nextSlide();
    }
});
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 37) {
    prevSlide();
    }
});

// Auto slide
if (auto) {
  // Run next slide at interval timeout
slideInterval = setInterval(nextSlide, intervalTime)
};


// Play/Pause slideshow
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'II';
  playing = true;
  slideInterval = setInterval(nextSlide,intervalTime);
}

pauseButton.onclick = function() {
  if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow()
  }
};


// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon //
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}


}
