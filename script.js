// Get all the slides
const slides = document.querySelectorAll('.carousel .slide');

// Set the initial slide index
let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    // Show the selected slide
    slides[index].classList.add('active');
}

// Function for the previous slide
function showPrevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

// Function for the next slide
function showNextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Set the initial slide
showSlide(currentIndex);

// Add event listeners for previous and next buttons
document.querySelector('.carousel-controls .prev').addEventListener('click', showPrevSlide);
document.querySelector('.carousel-controls .next').addEventListener('click', showNextSlide);

// Optionally, add automatic slide change
setInterval(showNextSlide, 5000); // Change slide every 5 seconds


