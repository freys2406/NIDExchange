document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".carousel-slide");
    let slideIndex = 0;
    const totalSlides = document.querySelectorAll(".carousel-slide img").length;

    function moveSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    // Auto-slide every 3 seconds
    setInterval(moveSlide, 3000);
});
