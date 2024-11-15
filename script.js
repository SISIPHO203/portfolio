let slideIndex = 0; // Start with the first slide
showSlides(); // Call the function to display slides

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n; // Change the slide index
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Loop to the last slide
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

