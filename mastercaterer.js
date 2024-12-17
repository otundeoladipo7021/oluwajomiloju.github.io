document.addEventListener("DOMContentLoaded", () => {
    // Get the lightbox elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".close");

    // Get all images with the class "thumbnail"
    const thumbnails = document.querySelectorAll(".thumbnail");

    // Add click event to each thumbnail
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            // Get the large version of the image from the data attribute
            const largeImage = thumbnail.getAttribute("data-large");
            lightboxImage.src = largeImage; // Set the lightbox image source
            lightbox.style.display = "flex"; // Show the lightbox
        });
    });

    // Close the lightbox when the close button is clicked
    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none"; // Hide the lightbox
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none"; // Hide the lightbox
        }
    });
   
});

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  currentIndex += direction;

  // Loop back to the beginning or end if necessary
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Apply the transformation to move the carousel
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(() => moveSlide(1), 3000); // Change slide every 3 seconds
