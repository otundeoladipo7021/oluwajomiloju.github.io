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