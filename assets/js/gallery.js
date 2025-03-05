// Image data categorized
const galleryImages = {
    campus: [
        { src: "assets/data/pic1.png", caption: "Campus View 1" },
        { src: "assets/data/pic2.png", caption: "Campus View 2" },
        { src: "assets/data/pic3.png", caption: "Campus View 3" }
    ],
    utilities: [
        { src: "assets/data/pic4.png", caption: "Library" },
        { src: "assets/data/pic5.png", caption: "Cafeteria" },
        { src: "assets/data/pic6.jpg", caption: "Printing Room" }
    ],
    hostels: [
        { src: "assets/data/pic7.jpeg", caption: "Hostel Exterior" },
        { src: "assets/data/pic8.webp", caption: "Hostel Room" },
        { src: "assets/data/pic9.png", caption: "Hostel Common Area" }
    ]
};

// Select elements
const carouselImage = document.getElementById("carousel-image");
const carouselCaption = document.getElementById("carousel-caption");

// Handle category selection
document.querySelectorAll("#gallery-menu summary").forEach(summary => {
    summary.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        if (galleryImages[category]) {
            let currentIndex = 0;
            
            // Function to update the image
            function updateCarousel() {
                carouselImage.src = galleryImages[category][currentIndex].src;
                carouselCaption.textContent = galleryImages[category][currentIndex].caption;
            }

            // Load first image
            updateCarousel();

            // Cycle through images every 3 seconds
            setInterval(() => {
                currentIndex = (currentIndex + 1) % galleryImages[category].length;
                updateCarousel();
            }, 5000);
        }
    });
});
